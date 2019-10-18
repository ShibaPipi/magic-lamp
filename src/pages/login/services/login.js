import { REQUEST_URL } from '../constants';
import request from '../../../utils/request';

export function getToken(values) {
  return request(`${REQUEST_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(values),
  })
}
