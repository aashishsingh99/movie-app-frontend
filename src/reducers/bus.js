import {
  FIND_BUS,
  FIND_BUS_ERROR,
  ADD_BUS,
	ADD_BUS_ERROR,
	GET_ALL_BUSES,
	GET_ALL_BUSES_ERROR,
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
		case GET_ALL_BUSES_ERROR:
		case ADD_BUS_ERROR:
    case FIND_BUS_ERROR:
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
