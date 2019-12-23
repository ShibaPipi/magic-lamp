import * as purchasesService from '../services/purchases';

export default {
  namespace: 'purchases',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    * fetch({ payload: { page = 1 } }, { call, put }) {
        const { data, meta: { total } } = yield call(purchasesService.fetch, { page });
        yield put({
          type: 'save',
          payload: {
            data,
            total: parseInt(total, 10),
            page: parseInt(page, 10),
          },
        });
    },
    * patch({ payload: { id, values } }, { call, put, select }) {
      yield call(purchasesService.patch, id, values);
      const page = yield select(state => state.purchases.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    * create({ payload: values }, { call, put, select }) {
      yield call(purchasesService.create, values);
      const page = yield select(state => state.purchases.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    * remove({ payload: id }, { call, put, select }) {
      yield call(purchasesService.remove, id);
      const page = yield select(state => state.purchases.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/purchases') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
