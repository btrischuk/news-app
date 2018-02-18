import React, {Component} from 'react';
import image from 'images'
import { Container, Header, Item, Input, Icon, Button, Text, Content } from 'react-native';


class Search extends Component{
  render() {
    return (
      <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content>
        <Text>
          hello
        </Text>
      </Content>
    </Container>
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