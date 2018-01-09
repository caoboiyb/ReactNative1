/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ColorButton from '../component/ColorButton';

export default class App extends Component {

  state = {
    score: 0,
    targetInput: Array.from({ length: 6 }, () => Math.floor(Math.random() * 3)),
    userInput: []
  }

  _onPress = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  onSelect = (id) => {
    this.setState({
      userInput: [...this.state.userInput, id]
    }, () => this.checkInput(this.state.userInput))
  }

  checkInput = (userInput) => {
    console.log(this.state)
    const currentTarget = this.state.targetInput.slice(0, userInput.length)
    if (userInput[userInput.length - 1] === currentTarget[currentTarget.length - 1]) {
      this._onPress()
    }
  }

  componentDidMount() {
    console.log(this.state.targetInput)
  }

  render() {
    return (
      <View>
        <Text style={{
          marginTop: 30
        }}>{this.state.score}</Text>
        <ColorButton onPress={this._onPress} background="red" id={0} onSelect={this.onSelect} />
        <ColorButton onPress={this._onPress} background="yellow" id={1} onSelect={this.onSelect} />
        <ColorButton onPress={this._onPress} background="blue" id={2} onSelect={this.onSelect} />
        <ColorButton onPress={this._onPress} background="green" id={3} onSelect={this.onSelect} />
      </View>
    );
  }
}

