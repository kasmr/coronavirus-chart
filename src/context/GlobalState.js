import React, { createContext, useReducer } from 'react';

import axios from 'axios';

import AppReducer from './AppReducer';


const State = {
    globalData: [],
    countries: null,
    currentCountry: null,
    globalDailyData: null,
    loading: false,
    theme: 'light',
};


export const GlobalContext = createContext(State);

export const GlobalProvider = ({ children }) => {
    const [ {
        theme,
        loading,
        countries,
        globalData,
        currentCountry,
        globalDailyData,
    }, dispatch ] = useReducer(AppReducer, State);

    const apiEndpoint = 'https://covid19.mathdro.id/api';

    const switchThemeType = () => dispatch({
        type: 'SWITCH_THEME',
        payload: theme === 'light' ? 'dark' : 'light',
    });

    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    const fetchData = async () => {
        setLoading();

        const { data: payload } = await axios.get(apiEndpoint);

        dispatch({ type: 'GET_DATA', payload });
    };

    const fetchCountries = async () => {
        const { data: { countries } } = await axios.get(`${apiEndpoint}/countries`);

        dispatch({ type: 'GET_COUNTRIES', payload: countries });
    };

    const fetchCountry = async (country) => {
        const { data } = await axios.get(`${apiEndpoint}/countries/${country}`);

        dispatch({ type: 'GET_COUNTRY', payload: data });
    };

    const fetchGlobalDailyData = async () => {
        const { data } = await axios.get(`${apiEndpoint}/daily`);

        const payload = data.map(({ totalConfirmed, deaths, reportDate }) => ({
            confirmed: totalConfirmed,
            deaths: deaths.total,
            date: reportDate,
        }));

        dispatch({ type: 'GET_GLOBAL_DAILY_DATA', payload });
    };

    return (
        <GlobalContext.Provider value={{
            theme,
            loading,
            countries,
            globalData,
            currentCountry,
            globalDailyData,
            fetchData,
            setLoading,
            fetchCountry,
            fetchCountries,
            switchThemeType,
            fetchGlobalDailyData,
        }}>
            {children}
        </GlobalContext.Provider>

    );
};
