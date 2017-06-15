import React, { Component } from 'react';
import axios from 'axios';
import { 
  Container, 
  Header,
  Input,
  Menu
} from 'semantic-ui-react';

import SearchBar from '../components/SearchBar';
import CurrentWeather from  '../components/CurrentWeather';

// API Variables
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API = '20e3bd8c200716ba6c6879b78169d27a';

class App extends Component {
  state = { activeItem: 'Current', weather: {} }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSubmit = (term) => {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(term);
    if(isValidZip) {
      axios.get(`${ROOT_URL}?appid=${API}&zip=${term},us&units=imperial&mode=json`)
      .then( response => {
        this.setState({ weather: response.data });
      })
      .catch( error => {
        console.log(error);
      });
    } else {
      axios.get(`${ROOT_URL}?appid=${API}&q=${term},us&units=imperial&mode=json`)
      .then( response => {
        this.setState({ weather: response.data });
      })
      .catch( error => {
        console.log(error);
      });
    }
  }

  render() {
    const { activeItem, weather } = this.state

    return(
      <Container>
        <Header as='h1'textAlign='center'>Taytay's Weather App</Header>
        <SearchBar handleSubmit={this.handleSubmit} />
        <Menu fluid widths={2} >
          <Menu.Item 
            name='Current' 
            active={activeItem === 'Current'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name='5 Day Forecast' 
            active={activeItem === '5 Day Forecast'} 
            onClick={this.handleItemClick} 
          />
        </Menu>
        <CurrentWeather data={weather} />
      </Container>
    )
  }
}

export default App;