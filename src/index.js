import React, {Component} from 'react'
import { View, Text, Stylesheet } from 'react-native'

import Router from './Router'



class App extends Component{
  render() {
    return (
      <View> 
        <Router /> 
      </View>
    ) 
  }
}

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1
//   },
//   homeText: {
//     fontSize: 26,
//   }
//   }
// )

export default App