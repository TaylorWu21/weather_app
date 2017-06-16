import React from 'react';
import moment from 'moment';
import { Header, Card, Image, Icon } from 'semantic-ui-react';

const CurrentWeather = ({ forecast }) => {

  if(Object.keys(forecast) < 1) return(<Header as='h1' textAlign='center'>No City Chosen Yet</Header>);
  
  // Weather Icon
  let icon;
  let color;
  switch(forecast.weather[0].icon) {
    case '01d':
      icon = 'sun';
      color = 'orange';
      break;
    case '01n':
      icon = 'moon';
      color = 'black';
      break;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04n':
    case '04d':
      icon = 'cloud';
      color = 'grey';
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
      color = 'yellow';
      break;
    case '13d':
    case '13n':
      icon = 'snowflake outline';
      break;
    default:
      icon = 'sun';
      color = 'black';
      break;
  }

  const date = moment.unix(forecast.dt).format("ddd, MMMM D, YYYY");
  const time = moment.unix(forecast.dt).format("h:mm A");
  return(
    <Card>
      <Card.Content extra color='blue'>
      </Card.Content>
      <Card.Content>
        <Card.Header>
          {forecast.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {date}
            <br />
            {time}
          </span>
        </Card.Meta>
        <Card.Description>
          <Icon name='thermometer' color='black' />{Math.round(forecast.main.temp)} F
          <br />
          <Icon name={icon} color={color} />{forecast.weather[0].description}
          <br />
          <Icon name='leaf' color='green' />{Math.round(forecast.wind.speed)} mph
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CurrentWeather;