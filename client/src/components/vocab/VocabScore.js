import React, { useState } from 'react';

const VocabScore = ({ vocabScore }) => {
  const [score, setScore] = useState(vocabScore);
  return <span className="badge badge-primary badge-pill">{score}</span>;
};

export default VocabScore;
