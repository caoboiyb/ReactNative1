import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import ColumnView from './containers/ColumnView';

const unit = ["Metre", "Decimetre", "Centimetre", "Milimetre"]

class App extends PureComponent {

  state = {
    leftIndex: "0",
    leftValue: "0",
    rightIndex: "0",
    rightValue: "0"
  }



  _onChangeInput = (value, pos) => {
    if (pos == "0"){
      const pow = this.state.rightIndex - this.state.leftIndex;
      this.setState({
        leftValue: value,
        rightValue: String(Number(value) *(10**pow))
      })
    } else {
      const pow = this.state.leftIndex - this.state.rightIndex;
      this.setState({
        rightValue: value,
        leftValue: String(Number(value) *(10**pow))
      })
    }
  }

  _onChangeUnit = (index, pos) => {
    if (pos == "0"){
      const pow = this.state.rightIndex - index;
      this.setState({
        leftIndex: index,
        rightValue: String(Number(this.state.leftValue) *(10**pow))
      })
    } else {
      const pow = this.state.leftIndex - index;
      this.setState({
        rightIndex: index,
        leftValue: String(Number(this.state.rightValue) *(10**pow))
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#71589F", marginTop: 20 }}>
        <ColumnView 
          onChangeInput={this._onChangeInput} 
          onChangeUnit={this._onChangeUnit} 
          position="0" 
          unit={unit[this.state.leftIndex]} 
          value={this.state.leftValue} />
        <ColumnView 
          onChangeInput={this._onChangeInput} 
          onChangeUnit={this._onChangeUnit} 
          position="1" 
          unit={unit[this.state.rightIndex]} 
          value={this.state.rightValue} />
      </View>
    );
  }
}



export default App;