import axios from 'axios';
import { toast } from 'react-toastify';

import * as vocabActionType from './vocabActionType';

export const addVocab = (vocabData, history) => async (dispatch) => {
  try {
    dispatch({ type: vocabActionType.ADD_VOCAB_BEGINS });
    await axios.post('/api/vocabs', vocabData);
    dispatch({ type: vocabActionType.ADD_VOCAB_SUCCESS });

    history.push('/vocabs');
  } catch (error) {
    console.log(error);
    dispatch({ type: vocabActionType.ADD_VOCAB_FAILURE });
    toast.error(error.message);
  }
};

export const getVocab = () => async (dispatch) => {
  try {
    dispatch({ type: vocabActionType.GET_VOCAB_BEGINS });
    const res = await axios.get('/api/vocabs');
    dispatch({ type: vocabActionType.GET_VOCAB_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: vocabActionType.GET_VOCAB_FAILURE });
    toast.error(error.message);
  }
};

export const updateVocab = (vocabData) => async (dispatch) => {
  try {
    dispatch({ type: vocabActionType.UPDATE_VOCAB_BEGINS });
    const res = await axios.put(`/api/vocabs/${vocabData._id}`, vocabData);
    dispatch({
      type: vocabActionType.UPDATE_VOCAB_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: vocabActionType.UPDATE_VOCAB_FAILURE });
    toast.error(error.message);
  }
};

export const deleteVocab = (id) => async (dispatch) => {
  try {
    dispatch({ type: vocabActionType.DELETE_VOCAB_BEGINS });
    await axios.delete(`/api/vocabs/${id}`);
    dispatch({
      type: vocabActionType.DELETE_VOCAB_SUCCESS,
      payload: id
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: vocabActionType.DELETE_VOCAB_FAILURE });
    toast.error(error.message);
  }
};
