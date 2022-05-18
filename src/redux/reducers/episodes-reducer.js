const initialState = {
  episodes: [],
  favoriteEpisodes: [],
  episodeEpisodes: [],
  quantityPages: null,
  selectPage: 0,
  loading: true,
  error: null
};

const episodesReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'EPISODES_REQUEST':
      return {
        ...state,
        episodes: [],
        loading: true,
        error: null
      };
    case 'EPISODES_LOAD':
      return {
        ...state,
        episodes: action.payload,
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
        favoriteEpisodes: [...state.favoriteEpisodes, action.payload],
        loading: false,
        error: null
      };
      case 'REMOVE_FROM_FAVORITE':
        return {
          ...state,
          favoriteEpisodes: action.payload
        }
      case 'FILTER_FAVORITE_EPISODES':
        return {
          ...state,
          favoriteEpisodes: action.payload
        }
    case 'FAVORITE_EPISODES_LOCAL_STORAGE_LOAD':
      return {
        ...state,
        favoriteEpisodes: action.payload,
        loading: false,
        error: null,
      };
    case 'SET_EPISODES_CHARACTERS':
      return {
        ...state,
        episodeCharacters: action.payload,
        loading: false,
        error: null,
      };
    case 'EPISODES_ERROR':
      return {
        episodes: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default episodesReducer;