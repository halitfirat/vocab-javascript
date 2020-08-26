import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import vocabReducer from './vocab/vocabReducer';

export default combineReducers({
  auth: authReducer,
  vocab: vocabReducer
});
