import React, { Component } from 'react';
import 'babel-polyfill';
//Redux stuff
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

//should be routes
import AsyncApp from './views/AsyncApp';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp/>
      </Provider>
    );
  }
}

export default App;
