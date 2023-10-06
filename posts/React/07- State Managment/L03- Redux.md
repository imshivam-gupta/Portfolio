---
title: "Introduction to Redux"
subtitle: "State Management using Redux"
date: "2023-12-12"
---

Redux is a predictable state container for JavaScript apps. We can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.


Redux Toolkit is our official standard approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications. RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once. Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better. Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:

```bash
npm install @reduxjs/toolkit
```

The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:

```bash
npm install redux
```

Important packages:
- redux: The core Redux library
- react-redux: Official React bindings for Redux
- redux-thunk: An addon package that lets us write async logic that interacts with the store
- redux-devtools-extension: An addon package that lets us debug complex Redux logic, including state snapshots, action history, and more
- @reduxjs/toolkit: The official, opinionated, batteries-included toolset for efficient Redux development. It includes redux-thunk by default, and adds several other packages to simplify common Redux use cases.

```bash
npm install @reduxjs/toolkit
npm install react-redux
npm install redux
```





The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store. To specify how state gets updated in response to an action, you write pure reducer functions that calculate a new state based on the old state and the action.


```javascript
import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application's sta  As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.



### Redux Toolkit

Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
```

Redux Toolkit (also known as "RTK" for short) is our official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that we think are essential for building a Redux app.

RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.



## What is Redux?

Redux is really:
A single store containing "global" state
Dispatching plain object actions to the store when something happens in the app
Pure reducer functions looking at those actions and returning immutably updated state


While it's not required, your Redux code also normally includes:
Action creators that generate those action objects
Middleware to enable side effects
Thunk functions that contain sync or async logic with side effects
Normalized state to enable looking up items by ID
Memoized selector functions with the Reselect library for optimizing derived data
The Redux DevTools Extension to view your action history and state changes
TypeScript types for actions, state, and other functions








he Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:

createStore to actually create a Redux store
combineReducers to combine multiple slice reducers into a single larger reducer
applyMiddleware to combine multiple middleware into a store enhancer
compose to combine multiple store enhancers into a single store enhancer

```javascript
const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() }
})

export const todoToggled = id => ({
  type: TODO_TOGGLED,
  payload: { id }
})

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}
```


We specifically created Redux Toolkit to eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.

Redux Toolkit starts with two key APIs that simplify the most common things you do in every Redux app:

configureStore sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than createStore, because it takes named options parameters.
createSlice lets you write reducers that use the Immer library to enable writing immutable updates using "mutating" JS syntax like state.value = 123, with no spreads needed. It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names. Finally, it works great with TypeScript.


```javascript
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
```

All of the action creators and action types are generated automatically, and the reducer code is shorter and easier to understand. It's also much more clear what's actually being updated in each case.

With configureStore, the store setup can be simplified down to:

```javascript
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})
```


Note that this one configureStore call automatically does all the usual setup work you'd have done manually:

The slice reducers were automatically passed to combineReducers()
The redux-thunk middleware was automatically added
Dev-mode middleware was added to catch accidental mutations
The Redux DevTools Extension was automatically set up
The middleware and DevTools enhancers were composed together and added to the store
At the same time, configureStore provides the options to let users modify any of those default behaviors (like turning off thunks and adding sagas, or disabling the DevTools in production),

From there, Redux Toolkit includes other APIs for common Redux tasks:

createAsyncThunk: abstracts the standard "dispatch actions before/after an async request" pattern
createEntityAdapter: prebuilt reducers and selectors for CRUD operations on normalized state
createSelector: a re-export of the standard Reselect API for memoized selectors
createListenerMiddleware: a side effects middleware for running logic in response to dispatched actions

Finally, the RTK package also includes "RTK Query", a full data fetching and caching solution for Redux apps, as a separate optional @reduxjs/toolkit/query entry point. It lets you define endpoints (REST, GraphQL, or any async function), and generates a reducer and middleware that fully manage fetching data, updating loading state, and caching results. It also automatically generates React hooks that can be used in components to fetch data, like const { data, isFetching} = useGetPokemonQuery('pikachu')



Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to
Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs
Redux Toolkit eliminates the need to write any action creators or action types by hand
Redux Toolkit eliminates the need to write manual and error-prone immutable update logic
Redux Toolkit makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files
Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code
RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state








Setting up project:

Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

```javascript
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})
```

This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

Provide the Redux Store to React
Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

Create a Redux State Slice
Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

```javascript
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```


Add Slice Reducers to the Store
Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

```javascript
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```


Use Redux State and Actions in React Components
Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a &lt;Counter&gt; component inside, then import that component into App.js and render it inside of &lt;App&gt;.

```javascript
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
```

JavascriptNow, any time you click the "Increment" and "Decrement" buttons:

The corresponding Redux action will be dispatched to the store
The counter slice reducer will see the actions and update its state
The &lt;Counter&gt; component will see the new state value from the store and re-render itself with the new data



for typescript:

```javascript
import { configureStore } from '@reduxjs/toolkit'
// ...

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```


