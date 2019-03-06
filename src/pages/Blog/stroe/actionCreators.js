import axios from 'axios';
import * as constants from './constants';

const setBlogList = data => ({
  type: constants.CHANGE_DETAIL,
  data,
});

export const getBlogList = () => {
  return dispatch => {
    axios
      .get('/api/essay.json')
      .then(res => {
        const result = res.data;
        dispatch(setBlogList(result));
      })
      .catch(() => {});
  };
};
