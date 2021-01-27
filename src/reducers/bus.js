import {
  FIND_BUS,
  FIND_BUS_ERROR,
  ADD_BUS,
  ADD_BUS_ERROR,
  GET_ALL_BUSES,
  GET_ALL_BUSES_ERROR,
  GET_BUS_BY_ID,
  GET_BUS_BY_ID_ERROR,
  BOOK_BUS,
  BOOK_BUS_ERROR,
  RESET_BUS,
  RESET_BUS_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
  buses: [],
  bus: null,
  error: {},
};

function busReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_BUSES:
    case ADD_BUS:
    case FIND_BUS:
      return {
        ...state,
        loading: false,
        buses: payload,
        bus: null,
      };
    case RESET_BUS:
    case BOOK_BUS:
    case GET_BUS_BY_ID:
      return {
        ...state,
        loading: false,
        bus: payload,
      };
    case RESET_BUS_ERROR:
    case GET_ALL_BUSES_ERROR:
    case ADD_BUS_ERROR:
    case FIND_BUS_ERROR:
    case GET_BUS_BY_ID_ERROR:
    case BOOK_BUS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        buses: [],
        bus: null,
      };

    default:
      return state;
  }
}

export default busReducer;
