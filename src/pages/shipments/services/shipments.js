import { REQUEST_URL, PAGE_SIZE } from '../constants';
import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`${REQUEST_URL}?page=${page}&limit=${PAGE_SIZE}`);
}

export function patch(id, values) {
  return request(`${REQUEST_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request(REQUEST_URL, {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

export function remove(id) {
  return request(`${REQUEST_URL}/${id}`, {
    method: 'DELETE',
  });
}
