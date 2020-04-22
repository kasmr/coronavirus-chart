import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from '../../context/GlobalState';

const Chart = () => {
  const classes = useStyles();

  const { currentCountry } = useContext(GlobalContext);

  if (!currentCountry) {
    return 'Загрузка...';
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
