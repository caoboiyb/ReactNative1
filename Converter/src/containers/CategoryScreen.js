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
import { createCategoryAction } from '../actions/index';

class CategoryScreen extends PureComponent {
  _onChangeCategoryId = id => this.props.changeCategory(id);

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (<UnitSelector
    onChangeUnitId={this._onChangeCategoryId}
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
}

const mapAppStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeCategory: newValue => dispatch(createCategoryAction(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen);