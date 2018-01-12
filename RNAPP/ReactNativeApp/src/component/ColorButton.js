import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get("window")
const gameBoardSize = Math.min(width, height)

class ColorButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.colorView, {backgroundColor: this.props.background}]}></View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    colorView: {
        width: width * 0.45,
        height: width * 0.45,
        borderRadius: 5
    }
})

export default ColorButton;