import {
  FIND_MOVIE,
  FIND_MOVIE_ERROR,
  ADD_MOVIE,
  ADD_MOVIE_ERROR,
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_ERROR,
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_ERROR,
  BOOK_MOVIE,
  BOOK_MOVIE_ERROR,
  RESET_MOVIE,
  RESET_MOVIE_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
  movies: [],
  movie: null,
  error: {},
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_MOVIES:
    case ADD_MOVIE:
    case FIND_MOVIE:
      return {
        ...state,
        loading: false,
        movies: payload,
        movie: null,
      };
    case RESET_MOVIE:
    case BOOK_MOVIE:
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        loading: false,
        movie: payload,
      };
    case RESET_MOVIE_ERROR:
    case GET_ALL_MOVIES_ERROR:
    case ADD_MOVIE_ERROR:
    case FIND_MOVIE_ERROR:
    case GET_MOVIE_BY_ID_ERROR:
    case BOOK_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        movies: [],
        movie: null,
      };

    default:
      return state;
  }
}

export default movieReducer;
