import React from 'react';
import moment from 'moment';
import { Header, Card, Image, Icon } from 'semantic-ui-react';

const CurrentWeather = ({ forecast }) => {

  if(Object.keys(forecast) < 1) return(<Header as='h1' textAlign='center'>No City Chosen Yet</Header>);
  
  // Weather Icon
  let icon;
  switch(forecast.weather[0].icon) {
    case '01d':
      icon = 'sun';
      break;
    case '01n':
      icon = 'moon';
      break;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04n':
    case '04d':
      icon = 'cloud';
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      icon = 'rain';
      break;
    case '11d':
    case '11n':
      icon = 'lightning';
      break;
    case '13d':
    case '13n':
      icon = 'snowflake outline';
      break;
    default:
      icon = 'cloud';
      break;
  }

  const date = moment.unix(forecast.dt).format("dddd, MMMM D, YYYY");
  return(
    <Card>
      <Card.Content>
        <Card.Header>
          {forecast.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {date}
          </span>
        </Card.Meta>
        <Card.Description>
          <Icon name='thermometer' />{Math.round(forecast.main.temp)} F
          <br />
          <Icon name={icon} />{forecast.weather[0].description}
          <br />
          <Icon name='leaf' />{Math.round(forecast.wind.speed)} mph
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  );
}

export default CurrentWeather;