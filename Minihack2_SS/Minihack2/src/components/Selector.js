import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

class Selector extends PureComponent {
  state = {

  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{backgroundColor: this.props.backgroundColor}}>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF", 
    fontSize: 16, 
    marginLeft: 10, 
    paddingVertical: 20
  }
})
export default Selector;