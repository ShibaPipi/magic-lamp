import * as loginService from '../pages/login/services/login';

export default {

  namespace: 'token',

  state: {
    loginState: false,
    token: null
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
    * get({ payload: values }, { call, put }) {
      try {
        const { data: token } = yield call(loginService.getToken, values);
        yield put({ type: 'save', payload: { loginState: true, token } })
      } catch (e) {
        console.log(e)
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
