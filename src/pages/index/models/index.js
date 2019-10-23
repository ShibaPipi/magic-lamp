import * as indexService from '../services';

export default {
  namespace: 'index',

  state: {
    list: [],
    total: null,
    page: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    * fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(indexService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data
        },
      });
    },
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },

};
