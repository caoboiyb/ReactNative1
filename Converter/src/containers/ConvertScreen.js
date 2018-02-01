/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import globalStyles from '../Styles';

import ConvertColumn from '../components/ConvertColumn';

import { categories } from '../database.json';
import { connect } from 'react-redux';

class ConvertScreen extends Component {
  state = {
    items: categories[this.props.category].items
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Toggle Screen" onPress={this.props.toggleScreen} />
        <View style={[globalStyles.bgPrimary3, globalStyles.container, styles.appContainer]}>
          <ConvertColumn
            items={this.state.items}
          />
          <ConvertColumn
            items={this.state.items}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20,
    flexDirection: "row"
  }
});

const mapAppStateToProps = state => ({
  category: state.category
})

export default connect(mapAppStateToProps)(ConvertScreen);