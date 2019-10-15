import { REQUEST_URL_PREFIX, PAGE_SIZE } from '../constants';
import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`${REQUEST_URL_PREFIX}?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function patch(id, values) {
  return request(`${REQUEST_URL_PREFIX}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request(REQUEST_URL_PREFIX, {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

export function remove(id) {
  return request(`${REQUEST_URL_PREFIX}/${id}`, {
    method: 'DELETE',
  });
}
