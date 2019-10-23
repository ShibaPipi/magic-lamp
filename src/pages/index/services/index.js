import { BASE_URL_PREFIX } from '../../../constants';
import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`${BASE_URL_PREFIX}/posts?page=${page}&limit=4`);
}
