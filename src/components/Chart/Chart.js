import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut, Line } from 'react-chartjs-2';
import { GlobalContext } from '../../context/GlobalState';

const Chart = () => {
  const classes = useStyles();

  const { currentCountry, isChosen, globalDailyData } = useContext(
    GlobalContext
  );

  const globalData = {
    labels: globalDailyData && globalDailyData.map(({ date }) => date),
    datasets: [
      {
        label: 'Подтверждено',
        data:
          globalDailyData && globalDailyData.map(({ confirmed }) => confirmed),
        backgroundColor: 'rgba(61, 108, 185, 0.2)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        pointBackgroundColor: 'white',
      },
      {
        label: 'Летальных исхожов',
        data: globalDailyData && globalDailyData.map(({ deaths }) => deaths),
        backgroundColor: 'rgba(199, 00, 00, 1)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        pointBackgroundColor: 'white',
      },
    ],
  };

  const globalOptions = {
    title: {
      display: true,
      text:
        'График ежедневного изменения числа подтвержденых и летальных случаев Коронавируса',
    },
  };

  if (!currentCountry || !isChosen) {
    return (
      <div className={classes.root}>
        <Line data={globalData} options={globalOptions} />
      </div>
    );
  }

  const { confirmed, deaths, recovered } = currentCountry;

  const data = {
    labels: ['Подтверждено', 'Выздоровело', 'Летальные исходы'],
    datasets: [
      {
        label: 'On today',
        data: [confirmed.value, recovered.value, deaths.value],
        backgroundColor: ['#3d6cb9', '#0b8457', '#c03546'],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Диаграмма страны',
    },
  };

  // if (!currentCountry ) {
  //   return (
  //     <div className={classes.root}>
  //       <Line data={globalData} />
  //     </div>
  //   );

  return (
    <div className={classes.root}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1000,
    display: 'flex',
    margin: '1rem auto',
    [theme.breakpoints.down('md')]: {
      width: 800,
    },
    [theme.breakpoints.down('sm')]: {
      width: 380,
    },
  },
}));
