import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Heading = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h2' component='h2' className={classes.title}>
        Визуализированная статистика COVID-19
        <img
          src='coronavirus_logo.png'
          alt='coronavirus_logo'
          className={classes.img}
        />
      </Typography>
    </div>
  );
};

export default Heading;

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  img: {
    marginLeft: '1rem',
    width: '6%',
    [theme.breakpoints.down('sm')]: {
      width: '20%',
      marginLeft: 0,
      marginTop: '1rem',
    },
  },
}));
