import React, {Component} from 'react';
import { View, Text, Stylesheet } from 'react-native';

class Nfl extends Component{
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>
          NFL
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

export default Nfl