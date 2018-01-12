import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Platform,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get("window")

class StyleDemo extends Component {
    state = {}
    render() {
        return (
            <View style={{flex : 1}}>
                <View style={[styles.container, {flex: 1}]}>
                    <Text>Hello!</Text>
                </View>
                
                <View style={{
                    backgroundColor: "green",
                    height: 40
                }}>
                    <Text>Hello!</Text>
                </View>
                <View style={{
                    backgroundColor: "blue",
                    flex: 1
                }}>
                    <Text>Hello!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        paddingTop: Platform.OS === "ios" ? 20 : 0
    }
})

export default StyleDemo;