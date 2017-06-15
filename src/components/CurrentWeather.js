import React, { Component } from 'react';
import dateFormat from 'dateformat';

import { Header, Card, Image, Icon } from 'semantic-ui-react';

const CurrentWeather = ({ data }) => {
  console.log(data);

  if(Object.keys(data) < 1) return(<Header as='h1' textAlign='center'>No City Chosen Yet</Header>);

  const date = dateFormat(new Date(), "fullDate");

  let icon;
  console.log(data.weather[0].icon);
  switch(data.weather[0].icon) {
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
      icon = '';
      break;
  }

  console.log(icon);

  return(
    <Card>
      <Card.Content>
        <Card.Header>
          {data.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {date}
          </span>
        </Card.Meta>
        <Card.Description>
          <Icon name='thermometer' />{Math.round(data.main.temp)} F
          <br />
          <Icon name={icon} />{data.weather[0].description}
          <br />
          <Icon name='leaf' />{Math.round(data.wind.speed)} mph
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  );
}

export default CurrentWeather;