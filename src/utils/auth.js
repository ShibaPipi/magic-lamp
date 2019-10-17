import config from '../constants';
import { getCookie, delCookie } from './helper';

// Auth
export function getAuthHeader(sso_token) {
  return ({
    headers: {
      'Accept': 'application/json',
      'Authorization': sso_token,
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
}

export function redirectLogin() {
  localStorage.clear();
  window.location.href = config.redirectUrl + window.location.origin;
}

export function authenticated() {
  const sso_token = getCookie('sso_token');
  if (!sso_token) {
    redirectLogin();
  }
}

export function logOut() {
  delCookie({
    name: 'sso_token',
    path: '/',
    domain: '.corp.visiondk.com',
  });
  authenticated();
}
