import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import {
  createBaseValueAction,
  createLeftUnitAction,
  createRightUnitAction
} from '../actions/';

import globalStyles from '../Styles';

import UnitDisplay from './UnitDisplay';
import UnitList from './UnitList';

class ConvertColumn extends PureComponent {
  state = {
    currentUnitId: 1
  }

  _onChangeUnitId = (id) => {
    this.props.id === 0
      ? this.props.changeLeftUnit(id)
      : this.props.changeRightUnit(id)
  }

  _onChangeText = (text) => {
    const currentUnitId = this.props.id === 0
      ? this.props.leftUnitId
      : this.props.rightUnitId

    const currentItem = this.props.items.filter(
      item => item.id === currentUnitId
    )[0];

    this.props.changeBaseValue(
      parseFloat(text || 0) * currentItem.ratio
    );
  }

  render() {
    const currentUnitId = this.props.id === 0
      ? this.props.leftUnitId
      : this.props.rightUnitId
    const currentItem = this.props.items.filter(
      item => item.id === currentUnitId
    )[0];

    return (
      <View style={[styles.column]}>
        <UnitDisplay
          title={currentItem.title}
          value={this.props.baseValue / currentItem.ratio}
          onChange={this._onChangeText}
        />
        <UnitList
          items={this.props.items}
          selectedId={currentUnitId}
          onChangeUnitId={this._onChangeUnitId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1
  }
});

const mapAppStateToProps = state => ({
  baseValue: state.baseValue,
  leftUnitId: state.leftUnit,
  rightUnitId: state.rightUnit
});

const mapDispatchToProps = dispatch => ({
  changeBaseValue: newValue => dispatch(createBaseValueAction(newValue)),
  changeLeftUnit: newUnit => dispatch(createLeftUnitAction(newUnit)),
  changeRightUnit: newUnit => dispatch(createRightUnitAction(newUnit))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(ConvertColumn);