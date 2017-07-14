import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_JOB,
  CLEAR_JOBS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([
          action.payload, ...state
      ], 'jobkey');
    case CLEAR_JOBS:
      return [];
    case REHYDRATE:
      return action.payload.likedJobs || [];
    default:
      return state;
  }
};
