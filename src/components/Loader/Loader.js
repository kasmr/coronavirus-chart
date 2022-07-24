import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { loaderStyles } from './Styles';


const Loader = ({className}) => {

    const { spinner } = loaderStyles();

    return (
        <div className={className || spinner}>
            <CircularProgress size={75}/>
        </div>
    );
};

export default Loader;
