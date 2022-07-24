export default (state, { type, payload }) => {
    switch (type) {
        case 'SWITCH_THEME':
            return {
                ...state,
                theme: payload,
            };
        case 'GET_DATA':
            return {
                ...state,
                globalData: payload,
                loading: false,
            };
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: payload,
                loading: false,
            };
        case 'GET_COUNTRY':
            return {
                ...state,
                currentCountry: payload,
                loading: false,
            };
        case 'GET_GLOBAL_DAILY_DATA':
            return {
                ...state,
                globalDailyData: payload,
                currentCountry: null,
                loading: false,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
