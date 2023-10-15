---
title: "Applet Programming"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Java Applet is a program that appears embedded in web document and applet come into effect when browser browse the webpage.

Java Application is similar to all other kind of programs like in C, C++, Pascal, etc. It is a standalone program.

```java
import java.applet.*;
import java.awt.*;

public class MyApplet extends Applet {
    public void paint(Graphics g) {
        g.drawString("Hello World", 20, 20);
    }
}
```

- Name of Applet class must be same as the name of file.
- Applet class must be public.
- Edit an HTML file to embed the applet in the web page.

```html
<html>
    <head>
        <title>My Applet</title>
    </head>
    <body>
        <applet code="MyApplet.class" width="300" height="300">
        </applet>
    </body>
</html>
```

It can be run using appletviewer command.

```bash
appletviewer MyApplet.html
```

Basic Methods of Applet Class:

- public void init(): This method is used to initialize the applet. It is invoked only once.
- public void start(): This method is invoked after the init() method to start the applet or browser is minimized and maximized.
- public void stop(): This method is used to stop the applet. It is invoked when browser is minimized.
- public void destroy(): This method is used to destroy the applet.  It removes the applet from memory.
- public void paint(Graphics g): This method is used to paint within the applet window using the Graphics class object g.


Input Passing to an Applet:

```java
import java.applet.*;
import java.awt.*;

public class MyApplet extends Applet {
    int x,y,w,h;

    public void init() {
        x = Integer.parseInt(getParameter("x"));
        y = Integer.parseInt(getParameter("y"));
        w = Integer.parseInt(getParameter("w"));
        h = Integer.parseInt(getParameter("h"));
    }

    public void paint(Graphics g) {
        g.drawRect(x, y, w, h);
    }
}
```

Corresponding HTML file:

```html
<applet code="Rectangle.class" width="300" height="300">
    <param name="x" value="10">
    <param name="y" value="10">
    <param name="w" value="100">
    <param name="h" value="100">
</applet>
```

### Applet vs Application

- Applets do not use main() method for initiating the execution of code. Applets when loaded automatically call certain methods of the applet class to start and execute the code in applet.
- Unlike applications, applets do not run on their own. They run within either a web browser or an applet viewer.
- Applets cannot read from or write to the local file system. They can only read from or write to the server from which they are downloaded.
- Applets cannot communicate with other servers on the network apart from the server from which they are downloaded.
- Applets cannot run any program on the client machine.
- Applets are restricted from using libraries from other languages like C, C++, etc.

### Order of invocation of methods in Applet

When applet begins -  
- init()
- start()
- paint()

When applet terminates -
- stop()
- destroy()


**update()** method - It is defined in Applet class. It clears the screen and calls paint() method. By default, it fills the applet window with the default background color and then calls paint() method. Programmers can override this method so that it performs all the intended activities then in paint() to call update() method.


```java
public void update(Graphics g) {
   setBackground(Color.cyan);
   g.drawString("I am from update() method", 20, 20);
}

public void paint(Graphics g) {
    update(g);
    g.drawString("I am from paint() method", 20, 40);
}
```


**repaint()** method - It writes using update() or paint. Note: One cannot create a loop in paint() to change the information content in an appldt. Using the repaint() method, this method can be done. The repaint() causes the AWT runtime system to execute a call to applet's update() which in turn causes the paint() method to be called.

Methods of repaint() method:
- void repaint(): It repaints the applet.
- void repaint(int left, int top, int width, int height): It repaints the rectangular area of the applet.
- void repaint(long milliseconds): It repaints the applet after the specified time.
- void repaint(long milliseconds, int left, int top, int width, int height): It repaints the rectangular area of the applet after the specified time.


Example: Simple Banner Applet
