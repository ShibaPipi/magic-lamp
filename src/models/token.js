import * as loginService from '../pages/login/services/login';
import { routerRedux } from "dva/router";

export default {

  namespace: 'token',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
    * get({ payload: values }, { call, put }) {
      const { data: { token } } = yield call(loginService.getToken, values);
      // console.log(token)
      localStorage.setItem('loginState', true);
      localStorage.setItem('token', token);
      yield put(routerRedux.push('/'));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
