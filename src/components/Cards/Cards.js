import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import Loader from '../Loader/Loader';

import { CardsGroup } from '../CardsGroup/CardsGroup';


const Cards = () => {

    const { fetchData, loading, currentCountry, globalData } = useContext(GlobalContext);

    useEffect(() => {
        fetchData();
    }, []);

    if (!globalData.confirmed || loading) {
        return <Loader/>;
    }

    return currentCountry ? <CardsGroup {...currentCountry}/> : <CardsGroup {...globalData}/>;
};

export { Cards };

