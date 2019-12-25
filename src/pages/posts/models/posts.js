import * as postsService from '../services/posts';
import { getUrlLastParam } from "../../../utils/helper";

export default {
  namespace: 'posts',

  state: {
    data: {}
  },

  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, data };
    }
  },

  effects: {
    * fetch({ payload: id }, { call, put }) {
      const { data } = yield call(postsService.fetch, id);
      yield put({
        type: 'save',
        payload: { data }
      });
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location) => {
        // console.log(location)
        // if (-1 !== pathname.indexOf('posts/')) {
        //   console.log()
          // dispatch({
          //   type: 'fetch', payload: getUrlLastParam(pathname)
          // })
        // }
      })
    },
  },

}
