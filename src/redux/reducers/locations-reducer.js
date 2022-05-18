const initialState = {
  locations: [],
  favoriteLocations: [],
  quantityPages: null,
  selectPage: 0,
  loading: true,
  error: null
};

const locationsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOCATIONS_REQUEST':
      return {
        ...state,
        locations: [],
        loading: true,
        error: null
      };
    case 'LOCATIONS_LOAD':
      return {
        ...state,
        locations: action.payload,
        loading: false,
        error: null
      };
    case 'SET_QUANTITY_PAGES':
      return {
        ...state,
        quantityPages: action.payload
      };
    case 'SET_SELECTED_PAGE':
      return {
        ...state,
        selectPage: action.payload
      };
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favoriteLocations: [...state.favoriteLocations, action.payload],
        loading: false,
        error: null
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favoriteLocations: action.payload
      }
    case 'FILTER_FAVORITE_LOCATIONS':
      return {
        ...state,
        favoriteLocations: action.payload
      }
    case 'FAVORITE_LOCATIONS_LOCAL_STORAGE_LOAD':
      return {
        ...state,
        favoriteLocations: action.payload,
        loading: false,
        error: null,
      };
    case 'LOCATIONS_ERROR':
      return {
        locations: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default locationsReducer;