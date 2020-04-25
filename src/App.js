import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import Container from '@material-ui/core/Container';
import Cards from './components/Cards/Cards';
import Picker from './components/Picker/Picker';
import Chart from './components/Chart/Chart';
import Heading from './components/Heading/Heading';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <GlobalProvider>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <Container maxWidth='lg'>
            <Heading />
            <FormControlLabel
              className='switch'
              control={
                <Checkbox
                  checked={darkMode}
                  onChange={handleChange}
                  icon={<Brightness4OutlinedIcon style={{ fontSize: 40 }} />}
                  checkedIcon={
                    <Brightness7Icon style={{ fontSize: 40 }} color='inherit' />
                  }
                  color='default'
                />
              }
            />
            <Cards />
            <Picker />
            <Chart />
          </Container>
        </ScopedCssBaseline>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
