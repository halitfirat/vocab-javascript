import * as authActionType from './authActionType';

const initialUser = {
  user: null,
  getUserLoading: false
};

export default (state = initialUser, action) => {
  switch (action.type) {
    case authActionType.GET_USER_BEGINS:
      return {
        ...state,
        getUserLoading: true
      };
    case authActionType.GET_USER_SUCCESS:
      return {
        ...state,
        getUserLoading: false,
        user: action.payload
      };
    case authActionType.GET_USER_FAILURE:
      return {
        ...state,
        getUserLoading: false,
        user: null
      };
    default:
      return state;
  }
};
