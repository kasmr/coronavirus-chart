import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Container from '@material-ui/core/Container';
import Cards from './components/Cards/Cards';

const App = () => {
  return (
    <GlobalProvider>
      <Container maxWidth='lg'>
        <h1>Charts</h1>
        <Cards />
      </Container>
    </GlobalProvider>
  );
};

export default App;
