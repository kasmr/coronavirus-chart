import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Cards from './components/Cards/Cards';
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

function App() {
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const [state, setState] = useState();

  const fetchData = async () => {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const destructuredData = { confirmed, recovered, deaths, lastUpdate };

    setState(destructuredData);
  };

  return (
    <Container maxWidth='lg'>
      <h1>Charts</h1>
      <Cards state={state} />
    </Container>
  );
}

export default App;
