https://www.geeksforgeeks.org/javascript-architecture-flux-components/


Redux

Redux is an implementation of Flux and consists of four key parts organized as a one-way data pipeline: 
The View dispatches actions that describe what happened. Then, the Store receives these actions and determines what state change should occur. After the State updates, the View is rendered with the new state.

The Store is where the state is managed centrally. It’s responsible for maintaining the state and receiving actions from the View.

The Store handles the state updates with a function called Reducer (a function that receives a state and a dispatched action from the view to return a new state specified by the action). It’s important to note that reducer functions must be pure, meaning the State has to be treated as an immutable object and can’t be manipulated directly.
The View needs to re-render after the update because the State is being modified outside of React. The store implements the observer pattern with an array that uses a subscribe method to add a new listener and call each listener function whenever the state changes.

In the View, we can subscribe to our component when it mounts. The listening function that we pass to subscribe() will call this.force_update() and will trigger a re-render of the component. The view mentioned above is the one in Flux architecture, but when we put it in the React ecosystem the view is contained in the React component.

https://cdn2.scalablepath.com/_next/image?url=https%3A%2F%2Fcdn-blog.scalablepath.com%2Fuploads%2F2022%2F08%2Fredux-data-management-diagram-1.webp&w=1200&q=75







Context API is a different approach to tackling the data flow problem between React’s deeply nested components. Context has been around with React for quite a while, but it has changed significantly since its inception. Up to version 16.3, Context was a way to handle the state data outside the React component tree. It was an experimental feature not recommended for most use cases.

Initially, the problem with legacy context was that updates to values that were passed down with context could be “blocked” if a component skipped rendering through the shouldComponentUpdate lifecycle method. Since many components relied on shouldComponentUpdate for performance optimizations, the legacy context was useless for passing down plain data.

The new version of Context API is a dependency injection mechanism that allows passing data through the component tree without having to pass props down manually at every level.

The most important thing here is that, unlike Redux, Context API is not a state management system. Instead, it’s a dependency injection mechanism where you manage a state in a React component. We get a state management system when using it with useContext and useReducer hooks.

How Does Context API Work? 
Context API is quite simple. You only need to create a state context using the function createContext and it will return a provider and a consumer. The provider wraps the component tree where you expect the descendants to consume the state. The consumer is the wrapper for the location where the state data is used. 

https://cdn2.scalablepath.com/_next/image?url=https%3A%2F%2Fcdn-blog.scalablepath.com%2Fuploads%2F2022%2F08%2Fcontext-api-data-flow-management.webp&w=1200&q=75

















Response Time
An important aspect of response time is the time spent on initial load. That time is directly proportional to the amount of data sent from the server and the speed of the network. If we had two apps with similar code running on the same server and the same network, one using Context API and the other Redux, the app using Redux would take longer because it requires external libraries to function. The actual difference is only about 2 kilobytes. 

Another response time component is the time spent to respond to user actions. In this case, the number of operations and the speed of the network are the two most important parameters. Redux requires more computational operations to be performed to respond to a user request. However, this difference is negligible. 

Therefore, it’s safe to assert that when it comes to response time there’s not a major difference between the two. 

Verdict: No major difference in response time.

Ease of Development
When it comes to ease of development, the most important aspect is the number of lines of code that have to be written to carry out an operation. Let’s look at some specific scenarios to get an estimate for this metric.

Scenario 1: Sharing State with Nested Components in React
Let’s imagine a scenario where we want to make some value available to any component in a given React tree without prop drilling. To solve this problem using Context API, we have to create a context with a default value, wrap a high-level component with a provider for that context and use it in one of their children. To compare with Redux, we have to implement the store by creating the object with the initial state, implement the reducer where we handle each action, return the new state, subscribe to the state change and dispatch the action. And so, Redux would require significantly more lines of code to be written to perform a similar action compared to Context API.


https://cdn1.scalablepath.com/_next/image?url=https%3A%2F%2Fcdn-blog.scalablepath.com%2Fuploads%2F2022%2F08%2Fcontext-api-sharing-state-react-nested-components.webp&w=1200&q=75


Scenario 2: Building an App with State Management

https://cdn1.scalablepath.com/_next/image?url=https%3A%2F%2Fcdn-blog.scalablepath.com%2Fuploads%2F2022%2F08%2Freact-state-management-app-diagram.webp&w=1200&q=75


Another scenario is where we have a moderately complex state management needs within a specific section of our application. In this case, we could combine Context API with getContext and useReducer hooks. The lines of code would then be determined by the implementation of the reducers. Both Redux and Context API have to subscribe to the state in order to re-render the components that have been modified and they both require a place to manage the state. The lines of code required are similar in both cases.

Scenario 3: Building an App with Undo and Redo Functionality
Consider building an app with Undo and Redo functionality. With Redux, implementing undo functionality is rather easy. This is because the state is immutable and mutations are already described as discrete actions, which is close to the undo stack mental model.

https://cdn1.scalablepath.com/_next/image?url=https%3A%2F%2Fcdn-blog.scalablepath.com%2Fuploads%2F2022%2F08%2Fundo-redo-functionality-react-application-diagram.webp&w=1200&q=75


For any scenario, we simply need to reshape the state into past, present and future values. Here, past and future are stacks where values are popped and pushed with undo and redo actions in the reducer. With Context API, it’s not possible to do this unless we augment the API with libraries or custom code that supports this functionality.

Verdict: ease of development with Redux or Context API depends on what you’re building.  

Ease of Maintenance
It’s necessary to understand what happens in an application to easily maintain it. Developer tooling can be very useful for gaining this insight. For example, Redux enables you to inspect every state and action payload, go back in time by “canceling” actions and identify and analyze the error if a reducer throws one. These capabilities means less time is spent understanding the application and fixing bugs. Unfortunately, Context API is not as strong as Redux in this regard.

Application size and complexity are other important aspects to consider when comparing ease of maintenance. While it’s difficult to classify application complexity by using the number of components or nested elements as a metric, it’s important to note that small and simple applications will perform just fine with Context API. This is because the application state can generally be managed by passing it through components. That said, larger and more complex apps might require you to leverage the getContext and useReducer hooks alongside with the Context API. 

Verdict: Redux provides better support for troubleshooting and testing large and complex applicati

















Context API	Redux
Built-in tool that ships with React	Additional installation Required, driving up the final bundle size
Requires minimal Setup	Requires extensive setup to integrate it with a React Application
Specifically designed for static data, that is not often refreshed or updated	Works like a charm with both static and dynamic data
Adding new contexts requires creation from scratch	Easily extendible due to the ease of adding new data/actions after the initial setup
Debugging can be hard in highly nested React Component Structure even with Dev Tool	Incredibly powerful Redux Dev Tools to ease debugging
UI logic and State Management Logic are in the same component	Better code organization with separate UI logic and State Management Logic