import React, {Component} from 'react';
import { View, Text, Stylesheet, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'react-native';
imort { getCbcNews } from '../../Api';

class Cbc extends Component{
  state =(
    data: {}

  )
componentWillMount(){
  getCbcNews().then(res => this.setState({data: res.articles}))
}

  render() {
    return (
    <container>
       <content>
        <list data dataArray= (item)>
        </list>
      </content>
    </container>
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