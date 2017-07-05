import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARMS = {
  publisher: '1492029013888154',
  format: 'json',
  v: '2',
  latlng: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
}

export const fetchJob = (region) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
  } catch (e) {
    console.error(e);
  }

}
