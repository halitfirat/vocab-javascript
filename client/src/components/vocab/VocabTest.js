import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SuccessAnimation from '../../animations/SuccessAnimation';
import { updateVocab } from '../../store/vocab/vocabAction';

const VocabTest = ({ term, vocab }) => {
  const dispatch = useDispatch();
  const [foreign, setForeign] = useState('');
  const [scored, setScored] = useState(false);

  const onForeignChange = (e) => {
    setForeign(e.target.value);
  };

  const testForeign = () => {
    if (foreign === term) {
      dispatch(updateVocab({ ...vocab, score: vocab.score + 1 }));
      setScored(true);
    }
  };

  if (!scored) {
    return (
      <div>
        <input
          style={{
            backgroundColor: 'rgba(30, 144, 255, 0.4)',
            border: '1px solid rgb(82,72,65)',
            borderRadius: '3px',
            color: 'white'
          }}
          type="text"
          value={foreign}
          onChange={onForeignChange}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              testForeign();
              setForeign('');
            }
          }}
        />
      </div>
    );
  }

  return <SuccessAnimation />;
};

export default VocabTest;
