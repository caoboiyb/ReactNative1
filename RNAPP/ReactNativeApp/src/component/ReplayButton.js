import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class ReplayButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    backgroundColor: "gray",
                    width: 50,
                    height: 40
                }}>
                    <Text>Replay</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ReplayButton;