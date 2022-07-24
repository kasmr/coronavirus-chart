import React from 'react';

import Container from '@material-ui/core/Container';
import ScopedCssBaseline from '@material-ui/core/CssBaseline';

import { GlobalProvider } from './context/GlobalState';
import { ThemeProviderWrapper } from './context/ThemeProviderWrapper';

import { Chart } from './components/Chart/Chart';
import { Cards } from './components/Cards/Cards';
import { Picker } from './components/Picker/Picker';
import { Heading } from './components/Heading/Heading';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';


const App = () => {
    return (
        <GlobalProvider>
            <ThemeProviderWrapper>
                <ScopedCssBaseline>
                    <Container maxWidth="lg">
                        <Heading/>
                        <ThemeSwitcher/>
                        <Cards/>
                        <Picker/>
                        <Chart/>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProviderWrapper>
        </GlobalProvider>
    );
};

export default App;
