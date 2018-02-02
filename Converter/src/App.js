import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import { AppNavigation } from './AppNavigation'

import reducers from './reducers/';

const store = createStore(reducers);

const page = {
  CATEGORY: "CATEGORY",
  CONVERT: "CONVERT"
}

class App extends PureComponent {
  state = {

  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;