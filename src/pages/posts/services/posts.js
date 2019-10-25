import { REQUEST_URL } from "../constants";
import request from "../../../utils/request";

export function fetch(id) {
  return request(`${REQUEST_URL}/${id}`);
}
