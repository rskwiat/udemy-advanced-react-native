import {
  FETCH_JOBS
} from '../actions/types';

const INIT_STATE = {
  results: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
};
