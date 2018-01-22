import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

import Selector from "../components/Selector"

class ColumnView extends PureComponent {
    state = {
        currentUnit: "Metre",
        unit: ["Metre", "Decimetre", "Centimetre", "Milimetre"],
        value: "125"
    }

    _onPress = (index) => {
        this.setState({
            currentUnit: this.state.unit[index]
        })
    }

    _onChangeText = (text) => {
        this.setState({
            value: text
        })
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ backgroundColor: "#4E3D6E" }}>
                    <Text style={styles.text}>{this.state.currentUnit}</Text>
                    <TextInput onChangeText={this._onChangeText} style={[styles.text, {paddingBottom: 20}]} value={this.state.value} />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Selector onPress={() => this._onPress(0)} backgroundColor="#5D4883" name={this.state.unit[0]} />
                    <Selector onPress={() => this._onPress(1)} backgroundColor="#6A5295" name={this.state.unit[1]} />
                    <Selector onPress={() => this._onPress(2)} backgroundColor="#5D4883" name={this.state.unit[2]} />
                    <Selector onPress={() => this._onPress(3)} backgroundColor="#6A5295" name={this.state.unit[3]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    text: {
        color: "#FFFFFF", 
        fontSize: 24, 
        paddingTop: 20, 
        marginLeft: 10
    }
})

export default ColumnView;