import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { GlobalContext } from '../../context/GlobalState';
import { NativeSelect } from '@material-ui/core';

const Picker = () => {
  const classes = useStyles();
  const {
    countries,
    fetchCountries,
    fetchCountry,
    fetchGlobalDailyData,
  } = useContext(GlobalContext);
  const [country, setCountry] = useState('Global');

  useEffect(() => {
    fetchCountries();
    if (country === 'Global') {
      fetchGlobalDailyData();
    } else if (country !== 'Global') {
      fetchCountry(country);
    }

    //eslint-disable-next-line
  }, [country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Страна</InputLabel>
        <NativeSelect value={country} onChange={handleChange}>
          <option value='Global'>Global (In the whole World)</option>
          {countries &&
            countries.map((item) => (
              <option key={item.name} value={item.iso3}>
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
