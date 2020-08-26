import axios from 'axios';

import * as authActionType from './authActionType';

export const getUser = () => async (dispatch) => {
  dispatch({ type: authActionType.GET_USER_BEGINS });
  try {
    const res = await axios.get('/api/current_user');
    if (res.data) {
      dispatch({
        type: authActionType.GET_USER_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({ type: authActionType.GET_USER_FAILURE });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: authActionType.GET_USER_FAILURE });
  }
};
