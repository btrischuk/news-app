import React, {Component} from 'react';
import { View, Text, Stylesheet } from 'react-native';

class Cbc extends Component{
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>
          CBC
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  homeText: {
    fontSize: 26,
  }
  }
)

export default Cbc