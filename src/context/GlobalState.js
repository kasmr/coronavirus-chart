import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  data: [],
  countries: [],
};

//Context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const url = 'https://covid19.mathdro.id/api';

  //Actions

  //Fetching data

  const fetchData = async () => {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const destructuredData = { confirmed, recovered, deaths, lastUpdate };

    dispatch({ type: 'GET_DATA', payload: destructuredData });
  };

  //Fetching countries

  const fetchCountries = async () => {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const destructuredData = { confirmed, recovered, deaths, lastUpdate };
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        fetchData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
