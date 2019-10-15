import fetch from 'dva/fetch';
import { getAuthHeader, redirectLogin } from './auth';
import { getCookie } from './helper';

function checkStatus(response) {
  if (response && response.status === 401) {
    redirectLogin();
  }
  if (response.status >= 200 && response.status < 500) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const authHeader = getAuthHeader(getCookie('sso_token'));
  const response = await fetch(url, { ...options, ...authHeader });

  checkStatus(response);

  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }

  return ret;
}
