import './VocabListItem.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';

import VocabTest from './VocabTest';
import { deleteVocab } from '../../store/vocab/vocabAction';
import VocabUpdate from './VocabUpdate';

const VocabListItem = ({ vocab, testMode, setDeletedVocabId }) => {
  const dispatch = useDispatch();
  const [showUpdateVocab, setShowUpdateVocab] = useState(false);

  const removeVocab = (id) => {
    setDeletedVocabId(id);
    dispatch(deleteVocab(id));
  };

  const toggleShowModal = () => {
    if (!showUpdateVocab) {
      return setShowUpdateVocab(true);
    }

    setShowUpdateVocab(false);
  };

  const onHide = () => {
    setShowUpdateVocab(false);
  };

  return (
    <li
      key={vocab._id}
      className="list-group-item d-flex justify-content-between align-items-center item"
    >
      <div className="item-grid">
        <div className="native">{vocab.native}</div>
        {testMode ? (
          <VocabTest term={vocab.foreign} vocab={vocab} />
        ) : (
          <div className="foreign">{vocab.foreign}</div>
        )}
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="primary"
            size="sm"
            style={{ pointerEvents: 'none' }}
            tabindex="-1"
          >
            Score{' '}
            <Badge pill style={{ backgroundColor: 'rgb(3,125,80)' }}>
              {vocab.score}
            </Badge>
          </Button>
          <Button
            onClick={toggleShowModal}
            variant="primary"
            size="sm"
            className="item-button ml-1 mr-1"
            tabindex="-1"
          >
            <i className="fas fa-edit"></i>
          </Button>
          <Button
            onClick={() => removeVocab(vocab._id)}
            variant="primary"
            size="sm"
            className="item-button red-on-hover"
            tabindex="-1"
          >
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      </div>
      <VocabUpdate
        onHide={onHide}
        showUpdateVocab={showUpdateVocab}
        vocab={vocab}
      />
    </li>
  );
};

export default VocabListItem;
