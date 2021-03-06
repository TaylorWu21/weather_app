import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

import Forecast from './Forecast';

const FiveDaysForecast = ({ fiveDayForecast }) => {

  if(Object.keys(fiveDayForecast).length < 1) return(<Header as='h1' textAlign='center'>No City Chosen Yet</Header>)

  let count = 4;
  const forecasts = fiveDayForecast.list.map( (weather, i) => {
    if(count === 4) {
      count = 1;
      return(
        <Grid.Column mobile={8} tablet={4} computer={3} key={i} >
          <Forecast forecast={weather} />
        </Grid.Column>
      );
    } else {
      count++;
      return null;
    }
  });

  return(
    <Container>
      <Header as='h1' textAlign='center'>{fiveDayForecast.city.name}</Header>
      <Grid>
        {forecasts}
      </Grid>
    </Container>
  )
}

export default FiveDaysForecast;
