import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

import Selector from "../components/Selector"

const unit = ["Metre", "Decimetre", "Centimetre", "Milimetre"]

class ColumnView extends PureComponent {
    state = {
        value: "0"
    }

    _onPress = (index) => {
        this.props.onChangeUnit(index, this.props.position)
    }

    _onChangeText = (text) => {
        this.setState({
            value: text
        }, this.props.onChangeInput(text, this.props.position))
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        })
    }


    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ backgroundColor: "#4E3D6E" }}>
                    <Text style={styles.text}>{this.props.unit}</Text>
                    <TextInput onChangeText={this._onChangeText} style={[styles.text, { paddingBottom: 20 }]} value={this.state.value} />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Selector onPress={() => this._onPress(0)} backgroundColor="#5D4883" name={unit[0]} />
                    <Selector onPress={() => this._onPress(1)} backgroundColor="#6A5295" name={unit[1]} />
                    <Selector onPress={() => this._onPress(2)} backgroundColor="#5D4883" name={unit[2]} />
                    <Selector onPress={() => this._onPress(3)} backgroundColor="#6A5295" name={unit[3]} />
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