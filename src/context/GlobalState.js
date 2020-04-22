import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  data: [],
  countries: null,
  currentCountry: null,
  isChosen: false,
  loading: false,
};

//Context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const url = 'https://covid19.mathdro.id/api';

  //Actions

  //Set loading

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  //Fetching data

  const fetchData = async () => {
    setLoading();

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const destructuredData = { confirmed, recovered, deaths, lastUpdate };

    dispatch({ type: 'GET_DATA', payload: destructuredData });
  };

  //Fetching countries

  const fetchCountries = async () => {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    dispatch({ type: 'GET_COUNTRIES', payload: countries });
  };

  //Fetching current country

  const fetchCountry = async (country) => {
    const { data } = await axios.get(`${url}/countries/${country}`);

    dispatch({ type: 'GET_COUNTRY', payload: data });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        countries: state.countries,
        currentCountry: state.currentCountry,
        isChosen: state.isChosen,
        fetchData,
        fetchCountries,
        setLoading,
        fetchCountry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};