import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ReplayButton from '../component/ReplayButton';

class GameOver extends Component {

  _onPress = () => {
    this.props.onChange(1,0)
  }

  render() {
    return (
      <View>
        <Text style={{
          marginTop: 30
        }}>{this.props.score}</Text>
        <ReplayButton onPress={this._onPress}/>
      </View>
    );
  }
}

export default GameOver;