import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import Home from './views/home.js';
import rootReducer from './reducers'
import { Provider } from "react-redux";
const store = createStore(rootReducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;
