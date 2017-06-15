import React, { Component } from 'react';
import { 
  Container, 
  Header,
  Input
} from 'semantic-ui-react';

import SearchBar from '../components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Container text>
        <Container textAlign='center' fluid>
          <Header as='h1'>Weather App</Header>
          <SearchBar />
        </Container>
      </Container>
    )
  }
}

export default App;