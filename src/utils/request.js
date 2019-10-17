import fetch from 'dva/fetch';
import { getAuthHeader, redirectLogin } from './auth';

function checkStatus(responseJson) {
  if (401 === responseJson.code) {
    redirectLogin();
  }

  const { status, message } = responseJson;
  if ('error' === status) {
    throw new Error(message);
  }

  return responseJson;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const authHeader = getAuthHeader(localStorage.getItem('jwToken'));
  const response = await fetch(url, { ...options, ...authHeader });
  const ret = await response.json();

  checkStatus(ret);

  return ret;
}
