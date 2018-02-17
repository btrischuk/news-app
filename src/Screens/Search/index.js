import React, {Component} from 'react';
import { View, Text, Stylesheet } from 'react-native';

class Search extends Component{
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>
          Search
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

export default Search