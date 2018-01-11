import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

class ColorButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    backgroundColor: this.props.background,
                    width: 40,
                    height: 40
                }}></View>
            </TouchableOpacity>
        );
    }
}

export default ColorButton;