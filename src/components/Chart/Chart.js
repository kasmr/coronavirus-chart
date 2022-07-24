import React, { useContext } from 'react';

import { Doughnut, Line } from 'react-chartjs-2';

import Loader from '../Loader/Loader';
import { GlobalContext } from '../../context/GlobalState';

import { chartStyles } from './Styles';


const Chart = () => {

    const { root } = chartStyles();

    const { currentCountry, globalDailyData } = useContext(GlobalContext);

    const countryOptions = {
        title: {
            display: true,
            text: 'Country diagram',
        },
    };

    const globalOptions = {
        title: {
            display: true,
            text: 'Coronavirus cases change by day chart ',
        },
    };

    const timeline = globalDailyData?.map(({ date }) => date.slice(0, 7));

    const LineChart = globalDailyData
        ? (<div className={root}>
            <Line data={{
                labels: timeline,
                datasets: [
                    {
                        label: 'Cases',
                        data: globalDailyData.map(({ confirmed }) => confirmed),
                        backgroundColor: 'rgba(61, 108, 185, 0.2)',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        pointBackgroundColor: 'white',
                    },
                    {
                        label: 'Deaths',
                        data: globalDailyData.map(({ deaths }) => deaths),
                        backgroundColor: 'rgba(199, 00, 00, 1)',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        pointBackgroundColor: 'white',
                    },
                ],
            }} options={globalOptions}/>
        </div>)
        : <Loader/>;

    const Chart = currentCountry
        ? (<div className={root}>
            <Doughnut data={{
                labels: [ 'Cases', 'Healed' ],
                datasets: [
                    {
                        label: 'On today',
                        data: [
                            currentCountry.confirmed.value,
                            currentCountry.deaths.value,
                        ],
                        backgroundColor: [ '#3d6cb9', '#0b8457', '#c03546' ],
                    },
                ],
            }} options={countryOptions}/>
        </div>)
        : <Loader/>;

    return <>{currentCountry ? Chart : LineChart}</>;
};

export { Chart };
