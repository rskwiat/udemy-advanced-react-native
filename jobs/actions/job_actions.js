import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARMS = {
  publisher: '1492029013888154',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJob = (region, cb) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    let url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    dispatch({
      type: FETCH_JOBS,
      payload: data
    });
    cb();
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  };
};

export const clearLikedJobs = () => {
  return {
    type: CLEAR_JOBS
  };
};
