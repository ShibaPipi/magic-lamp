import * as loginService from '../services/login';

export default {

  namespace: 'login',

  state: {
    // loginState
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
    * index({ payload: values }, { call, put }) {
      try {
        const { data: token } = yield call(loginService.index, values);
        yield put({ type: 'save', payload: { loginState: 1, token } })
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
