import * as vocabActionType from './vocabActionType';

const initialState = {
  addVocabLoading: false,
  vocabList: [],
  getVocabLoading: false,
  updatedVocab: null,
  updateVocabLoading: false,
  deleteVocabLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case vocabActionType.ADD_VOCAB_BEGINS:
      return {
        ...state,
        addVocabLoading: true
      };
    case vocabActionType.ADD_VOCAB_SUCCESS:
      return {
        ...state,
        addVocabLoading: false,
        vocabList: [...state.vocabList, payload]
      };
    case vocabActionType.ADD_VOCAB_FAILURE:
      return {
        ...state,
        addVocabLoading: false
      };
    case vocabActionType.GET_VOCAB_BEGINS:
      return {
        ...state,
        getVocabLoading: true
      };
    case vocabActionType.GET_VOCAB_SUCCESS:
      return {
        ...state,
        getVocabLoading: false,
        vocabList: { type, payload }.payload
      };
    case vocabActionType.GET_VOCAB_FAILURE:
      return {
        ...state,
        getVocabLoading: false
      };
    case vocabActionType.UPDATE_VOCAB_BEGINS:
      return {
        ...state,
        updateVocabLoading: true
      };
    case vocabActionType.UPDATE_VOCAB_SUCCESS:
      return {
        ...state,
        updateVocabLoading: false,
        vocabList: state.vocabList.map((voc) =>
          voc._id === payload._id ? payload : voc
        ),
        updatedVocab: payload
      };
    case vocabActionType.UPDATE_VOCAB_FAILURE:
      return {
        ...state,
        updateVocabLoading: false
      };
    case vocabActionType.DELETE_VOCAB_BEGINS:
      return {
        ...state,
        deleteVocabLoading: true
      };
    case vocabActionType.DELETE_VOCAB_SUCCESS:
      return {
        ...state,
        deleteVocabLoading: false,
        vocabList: state.vocabList.filter((voc) => voc._id !== payload)
      };
    case vocabActionType.DELETE_VOCAB_FAILURE:
      return {
        ...state,
        deleteVocabLoading: false
      };
    default:
      return state;
  }
};
