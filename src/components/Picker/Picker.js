import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { GlobalContext } from '../../context/GlobalState';
import { NativeSelect } from '@material-ui/core';

const Picker = () => {
  const classes = useStyles();
  const { countries, fetchCountries } = useContext(GlobalContext);
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetchCountries();
  }, [country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Страна</InputLabel>
        <NativeSelect value={country} onChange={handleChange}>
          {countries &&
            countries.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Picker;

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    width: 300,
    margin: '1rem auto',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
