export default (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case 'GET_COUNTRY':
      return {
        ...state,
        currentCountry: action.payload,
        loading: false,
      };
    case 'GET_GLOBAL_DAILY_DATA':
      return {
        ...state,
        globalDailyData: action.payload,
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
