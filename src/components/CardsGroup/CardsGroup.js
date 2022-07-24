import React from 'react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CountUp from 'react-countup';

import { cardsGroupStyles } from './Styles';


const CardsGroup = ({ confirmed, deaths, lastUpdate }) => {

    const { container, root, infected, title, pos, dead } = cardsGroupStyles();

    return (
        <div className={container}>
            <Card className={clsx(root, infected)}>
                <CardContent>
                    <Typography className={title} color="textSecondary" gutterBottom align="center">
                        Infected
                    </Typography>
                    <Typography variant="h4" component="h2" align="center" gutterBottom>
                        <CountUp start={0} end={confirmed.value} separator=","/>
                    </Typography>
                    <Typography variant="caption" className={pos} color="textSecondary">
                        {'Last updated: ' + new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="h5">
                        Total cases
                    </Typography>
                </CardContent>
            </Card>
            <Card className={clsx(root, dead)}>
                <CardContent>
                    <Typography className={title} color="textSecondary" gutterBottom align="center">
                        Deaths
                    </Typography>
                    <Typography variant="h4" component="h2" align="center" gutterBottom>
                        <CountUp start={0} end={deaths.value} separator=","/>
                    </Typography>
                    <Typography variant="caption" className={pos} color="textSecondary">
                        {'Last updated: ' + new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="h5">
                        Total cases
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export { CardsGroup };