import * as shipmentsService from '../services/shipments';

export default {
  namespace: 'shipments',
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
        const { data, meta: { total } } = yield call(shipmentsService.fetch, { page });
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
      yield call(shipmentsService.patch, id, values);
      const page = yield select(state => state.shipments.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    * create({ payload: values }, { call, put, select }) {
      yield call(shipmentsService.create, values);
      const page = yield select(state => state.shipments.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    * remove({ payload: id }, { call, put, select }) {
      yield call(shipmentsService.remove, id);
      const page = yield select(state => state.shipments.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/shipments') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
