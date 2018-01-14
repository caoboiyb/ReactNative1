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
  Button,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get("window")
const gameBoardSize = Math.min(width, height)

import ColorButton from '../component/ColorButton';

export default class GamePlay extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0,
    gameBoardSize: gameBoardSize
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, score } = this.state;

    input !== targetInput[userInputIndex]
      ? this.props.onGameOver(this.state.score)
      : userInputIndex === targetInput.length - 1
        ? this._toNextLevel(this.state.score + 1)
        : this.setState({
          userInputIndex: userInputIndex + 1
        });
  }

  _randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _toNextLevel = (score) => {
    this.setState({
      score,
      userInputIndex: 0,
      targetInput: this._nextLevel(this.state.targetInput)
    })
  }

  _nextLevel = (targetInput) => {
    return targetInput.concat(this._randomInt(0, 4));
  }

  _onLayout = (e) => {
    const newWidth = e.nativeEvent.layout.width
    const newHeight = e.nativeEvent.layout.height
    const newGameBoardSize = newWidth < newHeight ? gameBoardSize : gameBoardSize * 0.85
    this.setState({
      gameBoardSize: newGameBoardSize
    })
  }

  componentDidMount() {
    this._toNextLevel(0);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Hello React Native!</Text>
        <Text>{this.state.score}</Text>
        <Text>{this.state.targetInput}</Text>
        <View style={styles.wrapperGameBoard} onLayout={this._onLayout}>
              <ColorButton onPress={() => this._onPress(0)} background="red" width={this.state.gameBoardSize*0.5} height={this.state.gameBoardSize*0.5}/>
              <ColorButton onPress={() => this._onPress(1)} background="yellow" width={this.state.gameBoardSize*0.5} height={this.state.gameBoardSize*0.5}/>
              <ColorButton onPress={() => this._onPress(2)} background="blue" width={this.state.gameBoardSize*0.5} height={this.state.gameBoardSize*0.5}/>
              <ColorButton onPress={() => this._onPress(3)} background="green" width={this.state.gameBoardSize*0.5} height={this.state.gameBoardSize*0.5}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperGameBoard: {
    width: gameBoardSize,
    height: gameBoardSize * 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    flex: 1
  }
})

