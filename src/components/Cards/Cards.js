import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CountUp from 'react-countup';
import { GlobalContext } from '../../context/GlobalState';
import Loader from '../Loader/Loader';

const Cards = () => {
  const classes = useStyles();

  const {
    fetchData,
    loading,
    data: { confirmed, recovered, deaths, lastUpdate },
    currentCountry,
    isChosen,
  } = useContext(GlobalContext);

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  if (!confirmed || loading) {
    return <Loader />;
  }

  if (isChosen) {
    const { confirmed, recovered, deaths, lastUpdate } = currentCountry;

    return (
      <div className={classes.container}>
        <Card className={clsx(classes.root, classes.infected)}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='center'
            >
              Подтверждено
            </Typography>
            <Typography variant='h4' component='h2' align='center' gutterBottom>
              <CountUp start={0} end={confirmed.value} separator=',' />
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Количество людей инфицированных Коронавирусом
            </Typography>
          </CardContent>
        </Card>
        <Card className={clsx(classes.root, classes.healed)}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='center'
            >
              Выздоровело
            </Typography>
            <Typography variant='h4' component='h2' align='center' gutterBottom>
              <CountUp start={0} end={recovered.value} separator=',' />
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Количество людей, которое выздоровело{' '}
            </Typography>
          </CardContent>
        </Card>
        <Card className={clsx(classes.root, classes.dead)}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='center'
            >
              Летальные исходы
            </Typography>
            <Typography variant='h4' component='h2' align='center' gutterBottom>
              <CountUp start={0} end={deaths.value} separator=',' />
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Количество летальных исходов, причина которых - Коронавирус
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <Card className={clsx(classes.root, classes.infected)}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='center'
            >
              Подтверждено
            </Typography>
            <Typography variant='h4' component='h2' align='center' gutterBottom>
              <CountUp start={0} end={confirmed.value} separator=',' />
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Количество людей инфицированных Коронавирусом
            </Typography>
          </CardContent>
        </Card>
        <Card className={clsx(classes.root, classes.healed)}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='center'
            >
              Выздоровело
            </Typography>
            <Typography variant='h4' component='h2' align='center' gutterBottom>
              <CountUp start={0} end={recovered.value} separator=',' />
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Количество людей, которое выздоровело{' '}
            </Typography>
          </CardContent>
        </Card>
        <Card className={clsx(classes.root, classes.dead)}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              align='center'
            >
              Летальные исходы
            </Typography>
            <Typography variant='h4' component='h2' align='center' gutterBottom>
              <CountUp start={0} end={deaths.value} separator=',' />
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Количество летальных исходов, причина которых - Коронавирус
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default Cards;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  root: {
    minWidth: 275,
    width: 350,
    height: 200,
    margin: '1rem 0',
    padding: '1rem',
  },
  infected: {
    borderTop: '#3d6cb9 15px solid',
  },
  healed: {
    borderTop: '#0b8457 15px solid',
  },
  dead: {
    borderTop: '#c03546 15px solid',
  },
  title: {
    fontSize: '1.5rem',
  },
  pos: {
    marginBottom: 12,
  },
});
