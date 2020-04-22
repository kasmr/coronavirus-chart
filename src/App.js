import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Cards from './components/Cards/Cards';
import Picker from './components/Picker/Picker';
import Chart from './components/Chart/Chart';

const App = () => {
  return (
    <GlobalProvider>
      <Container maxWidth='lg'>
        <Typography variant='h2' component='h2' align='center' gutterBottom>
          COVID-19
        </Typography>
        <Cards />
        <Picker />
        <Chart />
      </Container>
    </GlobalProvider>
  );
};

export default App;
