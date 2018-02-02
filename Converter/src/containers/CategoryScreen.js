import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';

import globalStyles from '../Styles';
import { categories } from '../database.json';
import UnitSelector from '../components/UnitSelector';
import { createCategoryAction, createChangeScreenAction } from '../actions/index';

class CategoryScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "Category Screen",
  })

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (<UnitSelector
    onChangeUnitId={() => {
      this.props.changeCategory(item.id)
    }}
    item={{ title: item.name, id: item.id }}
    isEven={index % 2 === 0}
    isSelected={item.id === this.props.category}
  />)

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={[globalStyles.bgPrimary3, { flex: 1 }]}
          data={categories}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.category !== this.props.category){
      this.props.navigation.goBack()
    }
  }
}

const mapAppStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeCategory: newValue => dispatch(createCategoryAction(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen);