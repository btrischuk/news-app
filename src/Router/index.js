import React, {Component} from 'react'
import { TabNavigator } from 'react-navigation';
import Cbc from '../Screens/cbc/Cbc'
import Nfl from '../Screens/Nfl'
import Search from '../Screens/Search'

const Router = TabNavigator({
  Nfl: {screen: Nfl, 
    navigationOptions: {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarIcon: <Icon name="document"/>
    } },

  Cbc: {Screen : Cbc,
    navigationOptions: {
      swipeEnabled: true,
      animationEnabled: true,
      tabBarIcon: <Icon name="document"/>
      } },
      
  Search: {screen: Search,
    navigationOptions: {
      swipeEnabled: true,
      animationEnabled: true,
      tabBarIcon: <Icon name="document"/>
      } },
})


export default Router 