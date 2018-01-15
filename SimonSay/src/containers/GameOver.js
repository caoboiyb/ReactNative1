import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class GameOver extends PureComponent {
  state = {}
  render() {
    return (
      <View style={{ flex: 1, paddingBottom: "25%", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>Game Over</Text>
        <Text style={{ fontSize: 36 }}>Final score: {this.props.score}</Text>
        <Button color="blue" onPress={this.props.onRetry} title="Retry" />
      </View>
    );
  }
}

export default GameOver;