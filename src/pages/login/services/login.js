import { REQUEST_URL } from '../constants';
import request from '../../../utils/request';

export function index(values) {
  return request(`${REQUEST_URL}/login`, {
    method: 'POST',
    body: values
  })
}
