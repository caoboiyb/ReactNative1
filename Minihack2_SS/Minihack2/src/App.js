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
    left: {
      currentUnit: "Metre",
      value: "0"
    },
    right: {
      currentUnit: "Metre",
      value: "0"
    }
   }

   _onChangeInput = (unit, value) => {

   }

  render() {
    return (
      <View style={{flex: 1, flexDirection: "row", backgroundColor: "#71589F", marginTop: 20}}>
        <ColumnView onChangeInput={this._onChangeInput}/>
        <ColumnView onChangeInput={this._onChangeInput}/>
      </View>
    );
  }
}



export default App;