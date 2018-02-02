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
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : "",
    headerRight: (
      <Button title="Categories" onPress={() => navigation.navigate("CategoryScreen")} />
    )
  })

  componentDidMount() {
    this.props.navigation.setParams({
      title: categories[this.props.category].name
    })
  }

  componentWillReceiveProps(nextProps) {
    if (categories[nextProps.category].name !== categories[this.props.category].name){
      this.props.navigation.setParams({
        title: categories[nextProps.category].name
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[globalStyles.bgPrimary3, globalStyles.container, styles.appContainer]}>
          <ConvertColumn
            items={categories[this.props.category].items}
          />
          <ConvertColumn
            items={categories[this.props.category].items}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "row"
  }
});

const mapAppStateToProps = state => ({
  category: state.category
})

export default connect(mapAppStateToProps)(ConvertScreen);