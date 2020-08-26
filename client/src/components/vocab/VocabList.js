import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import VocabListItem from './VocabListItem';
import { getVocab } from '../../store/vocab/vocabAction';
import {
  vocabList,
  getVocabLoading,
  updatedVocab,
  deleteVocabLoading
} from '../../store/vocab/vocabSelector';

const VocabList = () => {
  const dispatch = useDispatch();
  const [testMode, setTestMode] = useState(true);
  const [localList, setLocalList] = useState([]);
  const [deletedVocabId, setDeletedVocabId] = useState(null);

  const getVocabLoadingSelector = useSelector(getVocabLoading);
  const vocabListSelector = useSelector(vocabList);
  const updatedVocabSelector = useSelector(updatedVocab);
  const deleteVocabLoadingSelector = useSelector(deleteVocabLoading);

  useEffect(() => {
    dispatch(getVocab());

    if (testMode) {
      document.getElementById('customSwitch1').checked = true;
    }
  }, []);

  useEffect(() => {
    if (vocabListSelector) {
      setLocalList(
        [...localList, ...vocabListSelector].sort(function (a, b) {
          return a.score - b.score;
        })
      );
    }
  }, [vocabListSelector]);

  useEffect(() => {
    if (updatedVocabSelector) {
      setLocalList([
        ...localList.map((elem) =>
          elem._id === updatedVocabSelector._id ? updatedVocabSelector : elem
        )
      ]);
    }
  }, [updatedVocabSelector]);

  useEffect(() => {
    console.log('deleteVocabLoadingSelector');
    setLocalList([...localList.filter((elem) => elem._id !== deletedVocabId)]);
  }, [deleteVocabLoadingSelector]);

  const toggleSwitch = () => {
    if (!testMode) {
      setTestMode(true);
    } else {
      setTestMode(false);
    }
  };

  const listVocab = () => {
    return localList.map((vocab) => {
      return (
        <VocabListItem
          key={vocab._id}
          vocab={vocab}
          testMode={testMode}
          setDeletedVocabId={setDeletedVocabId}
        />
      );
    });
  };

  const visibility = vocabListSelector.length === 0 ? 'hidden' : 'visible';

  return (
    <div>
      <div className="list-header" style={{ visibility }}>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={toggleSwitch}
          />
          <label
            className="custom-control-label font-weight-bold"
            htmlFor="customSwitch1"
          >
            Test Mode
          </label>
        </div>
      </div>
      <ul className="list-group" style={{ marginBottom: '57px' }}>
        {getVocabLoadingSelector && (
          <Spinner animation="border" variant="light" className="page-loader" />
        )}
        {listVocab()}
      </ul>
    </div>
  );
};

export default VocabList;
