import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { AppNavigation } from './AppNavigation'

import reducers from './reducers/';

const page = {
  CATEGORY: "CATEGORY",
  CONVERT: "CONVERT"
}

const persitData = store => next => action => {
  next(action)
  asyncSaveAppState(store.getState())
}

const asyncSaveAppState = async ({ baseValue, category, leftUnit, rightUnit }) => {
  try {
    await AsyncStorage.setItem(
      "@appState",
      JSON.stringify({ baseValue, category, leftUnit, rightUnit }))
  } catch (err) {
    console.error(err)
  }
}

class App extends PureComponent {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this._loadBaseValue()
  }

  _loadBaseValue = async () => {
    const savedState = await AsyncStorage.getItem("@appState");
    this.setState({
      isLoading: false,
      store: createStore(
        reducers,
        JSON.parse(savedState),
        applyMiddleware(persitData))
    })
  }


  render() {
    return (
      this.state.isLoading ? <Text>Loading...</Text>
        : (<Provider store={this.state.store}>
          <AppNavigation />
        </Provider>)
    );
  }
}

export default App;