import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import VocabList from './vocab/VocabList';

const Dashboard = () => {
  return (
    <div>
      <div style={{ textAlign: 'right' }}>
        <Link to="/vocabs/new">
          <Button variant="primary" className="button-top">
            Add Vocab
          </Button>
        </Link>
      </div>
      <VocabList />
    </div>
  );
};

export default Dashboard;
