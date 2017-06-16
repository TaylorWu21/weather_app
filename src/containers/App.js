import React from 'react';
import axios from 'axios';
import { 
  Container, 
  Header,
  Input,
  Menu,
  Message
} from 'semantic-ui-react';

import SearchBar from '../components/SearchBar';
import Forecast from  '../components/Forecast';
import FiveDaysForecast from '../components/FiveDaysForecast';

// API Variables
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/'
const API = '20e3bd8c200716ba6c6879b78169d27a';

class App extends React.Component {
  state = { activeItem: 'Current', currentWeather: {} , error: false, fiveDaysForecast: {} }

  componentDidMount() {
    if(localStorage.term) {
      this.handleSubmit(localStorage.term);
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSubmit = (term) => {
    // window.localstorage
    localStorage.setItem('term', term);

    // check if its a zipcode or city name
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(term);
    const CURRENT_WEATHER_URL = 
      `${ROOT_URL}weather?appid=${API}&${isValidZip? 'zip' : 'q' }=${term},us&units=imperial&mode=json`;
    const FIVE_DAY_WEATHER_URL = 
      `${ROOT_URL}forecast?appid=${API}&${isValidZip? 'zip' : 'q' }=${term},us&units=imperial&mode=json`;
    
    this.apiCall(CURRENT_WEATHER_URL, 'currentWeather');
    this.apiCall(FIVE_DAY_WEATHER_URL, 'fiveDaysForecast');
  }

  apiCall = (url, stateObj) => {
    axios.get(url)
    .then(res => {
      this.setState({ [stateObj]: res.data, error: false});
    })
    .catch( err => {
      localStorage.removeItem("term");
      console.log('error', err);
      this.setState({ error: true});
      setTimeout( () => { this.setState({ error: false }) }, 10000);
    })
  }

  render() {
    const { activeItem, currentWeather, error } = this.state

    return(
      <Container>
        <Header as='h1'textAlign='center'>Taylor's Dope Weather App</Header>
        <SearchBar handleSubmit={this.handleSubmit} />
        {
          error ? 
            <Message
              header='Failed to Find City'
              content='Please enter a valid city name or zipcode in the US'
              negative
            /> 
          : 
            null 
        }
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
        { 
          this.state.activeItem === 'Current' ? 
            <Forecast forecast={currentWeather} /> 
          : 
            <FiveDaysForecast fiveDayForecast={this.state.fiveDaysForecast} />
        }
        
      </Container>
    )
  }
}

export default App;