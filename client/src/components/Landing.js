import './Landing.css';
import React from 'react';

const Landing = () => {
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          padding: '100px 0',
          color: 'navy'
        }}
      >
        <h1
          style={{
            fontFamily: 'OpenSansExtraBold',
            fontSize: '150px',
            fontWeight: '900',
            marginBottom: '33px'
          }}
        >
          VOCAB
        </h1>
        <div className="box">
          <span>
            <h3>Learn Faster</h3>
          </span>
        </div>
        <p style={{ fontWeight: 'bold' }}>FREE FOR USE. ONLY LOGIN REQUIRED.</p>
      </div>
    </div>
  );
};

export default Landing;
