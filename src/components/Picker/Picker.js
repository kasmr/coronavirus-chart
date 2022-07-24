import React, { useContext, useEffect, useState } from 'react';

import { NativeSelect } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { GlobalContext } from '../../context/GlobalState';

import { pickerStyles } from './Styles';


const Picker = () => {

    const { formControl } = pickerStyles();

    const { countries, fetchCountries, fetchCountry, fetchGlobalDailyData } = useContext(GlobalContext);

    const [ country, setCountry ] = useState('Global');

    const getStatistics = () => {
        fetchCountries();
        country === 'Global' ? fetchGlobalDailyData() : fetchCountry(country);
    };

    useEffect(() => {
        getStatistics();
    }, [ country ]);

    return (
        <div>
            <FormControl className={formControl}>
                <InputLabel shrink>
                    Country
                </InputLabel>

                <NativeSelect value={country} onChange={e => setCountry(e.target.value)}>
                    <option value="Global">
                        In the World
                    </option>

                    {countries?.map(({ name, iso3 }) => (
                        <option key={name} value={iso3}>
                            {name}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export { Picker };
