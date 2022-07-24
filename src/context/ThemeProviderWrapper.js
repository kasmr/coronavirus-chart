import React, { useContext } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { GlobalContext } from './GlobalState';


const ThemeProviderWrapper = ({ children }) => {

    const { theme } = useContext(GlobalContext);

    const muiTheme = createMuiTheme({
        palette: {
            type: theme,
        },
    });

    return (
        <ThemeProvider theme={muiTheme}>
            {children}
        </ThemeProvider>
    );
};

export { ThemeProviderWrapper };