import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
  const classes = useStyles();
  const data = {
    labels: ['Подтверждено', 'Выздоровело', 'Летальные исходы'],
    datasets: [
      {
        label: 'On today',
        data: [10000, 1000, 5000],
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
