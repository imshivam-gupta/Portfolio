---
title: "Security Threats"
subtitle: "What will this cover"
date: "2020-12-27"
---

### Injection Attacks

Threat: Attackers can inject malicious code or commands into user inputs that are processed by the backend, such as SQL injection or NoSQL injection. For example, an attacker can inject SQL code into a login form to log in as an administrator without a password or with given password and any email. Example Code - 

```json
{
    "email": { "$gt": "" },
    "password": "pass1234"
}
```



Cure: Use parameterized queries and prepared statements to prevent SQL injection. Validate and sanitize user inputs to prevent other types of injection attacks. Example code to prevent SQL or MongoDB injection - 

```javascript
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

const userRouter = require('./api/routes/userRoutes');
const postRouter = require('./api/routes/postRoutes');


app.use(express.json());
app.use(mongoSanitize()); 


app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this Server!`, 404));
});


app.use(globalErrorHandler);
module.exports = app;
```

### Authentication and Authorization Issues:

Threat: Weak authentication mechanisms, insufficient authorization checks, and improper session management can lead to unauthorized access to sensitive data or functionality. For example attacker can gain access to admin panel by changing the role in the cookie. Example code - 


Cure: Implement strong authentication methods (e.g., multi-factor authentication), role-based access control, and regular session management reviews.


### Cross-Site Scripting (XSS):

Threat: Attackers can inject malicious scripts into web pages viewed by other users, potentially stealing sensitive information or performing actions on behalf of the victim. XSS attack means attacker can inject malicious code into the website. For example, if a user enters a script tag in the input field, then the script will be executed on the website. Parameter pollution attack means if a user enters the same parameter twice, then the last parameter will be considered. For example, if a user enters the name parameter twice, then the last name parameter will be considered.

Example of XSS attack - 

```json
{
    "name": "<script>alert('Hello')</script>"
}
```


Example of parameter pollution attack - 

```json
{
    "name": "John",
    "name": "Doe"
}
```


Cure: Sanitize and validate user-generated content and use output encoding to prevent malicious script execution. xss package can be used to prevent XSS attacks. hpp is another package that can be used to prevent parameter pollution attacks. 


```javascript
const xss = require('xss-clean');
const hpp = require('hpp');

app.use(hpp());
app.use(xss());
```

### Cross-Site Request Forgery (CSRF):

Threat: Attackers trick authenticated users into unknowingly performing actions on a web application without their consent.

Cure: Implement anti-CSRF tokens in forms and ensure that state-changing actions require user confirmation.


### Insecure Deserialization:

Threat: Attackers can manipulate serialized data to execute arbitrary code, leading to security breaches.

Cure: Avoid using insecure deserialization methods, validate and sanitize serialized data, and use libraries or frameworks with built-in deserialization security measures.


### Data Exposure:

Threat: Sensitive data, such as API keys or user information, may be exposed due to misconfigured permissions or API endpoints.

Cure: Limit data exposure by applying the principle of least privilege, using access control mechanisms, and regularly auditing permissions.



### Denial of Service (DoS) and Distributed Denial of Service (DDoS) Attacks:

Threat: Attackers overwhelm the backend infrastructure with excessive requests, causing service disruptions.

Cure: Implement rate limiting, traffic monitoring, and use cloud-based DDoS protection services to mitigate such attacks.


```javascript
var contentType = require('content-type')
var express = require('express')
var getRawBody = require('raw-body')
const rateLimit = require("express-rate-limit");

var app = express()

app.use(express.urlencoded({ extended: true, limit: "1kb" }));
app.use(express.json({ limit: "1kb" }));

app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!",
  })
);

app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: contentType.parse(req).parameters.charset
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
})
```


### Unvalidated Redirects and Forwards:

Threat: Attackers can manipulate redirects and forwards to redirect users to malicious sites.

Cure: Avoid using user-controlled data in redirects, validate input, and use a whitelist approach to validate redirect destinations.


### Code Vulnerabilities:

Threat: Insecure coding practices, such as buffer overflows or insecure libraries, can introduce vulnerabilities.

Cure: Regularly update libraries, follow secure coding practices, and conduct code reviews and security assessments.

### Lack of Monitoring and Logging:

Threat: Without proper monitoring and logging, it's challenging to detect and respond to security incidents.

Cure: Implement comprehensive monitoring, logging, and alerting systems to quickly identify and respond to security breaches.

```javascript
const helmet = require('helmet');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "example.com"],
      },
    },
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  })
);
```


