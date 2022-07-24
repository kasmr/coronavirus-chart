import React from 'react';

import { Typography } from '@material-ui/core';

import { useHeadingStyles } from './Styles';


const Heading = () => {

    const { title, img } = useHeadingStyles();

    return (
        <div>
            <Typography variant="h2" component="h2" className={title}>
                Visualisation of COVID-19

                <img src="coronavirus_logo.png" alt="coronavirus_logo" className={img}/>
            </Typography>
        </div>
    );
};

export { Heading };

