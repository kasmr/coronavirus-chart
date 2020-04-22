import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Container from '@material-ui/core/Container';
import Cards from './components/Cards/Cards';
import Picker from './components/Picker/Picker';
import Chart from './components/Chart/Chart';

const App = () => {
  return (
    <GlobalProvider>
      <Container maxWidth='lg'>
        <h1>Charts</h1>
        <Cards />
        <Picker />
        <Chart />
      </Container>
    </GlobalProvider>
  );
};

export default App;
