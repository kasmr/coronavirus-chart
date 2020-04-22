import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Container from '@material-ui/core/Container';
import Cards from './components/Cards/Cards';
import Picker from './components/Picker/Picker';
import Chart from './components/Chart/Chart';
import Heading from './components/Heading/Heading';

const App = () => {
  return (
    <GlobalProvider>
      <Container maxWidth='lg'>
        <Heading />
        <Cards />
        <Picker />
        <Chart />
      </Container>
    </GlobalProvider>
  );
};

export default App;
