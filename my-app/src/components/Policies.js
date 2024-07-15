import React from 'react';

const Policies = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Policies</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ADD8E6', width: '200px', textAlign: 'center' }}>
          <h3>Home Insurance</h3>
          <p>Amount: 20000</p>
        </div>
        <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#90EE90', width: '200px', textAlign: 'center' }}>
          <h3>Car Insurance</h3>
          <p>Amount: 10000</p>
        </div>
        <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#FFB6C1', width: '200px', textAlign: 'center' }}>
          <h3>Life Insurance</h3>
          <p>Amount: 50000</p>
        </div>
      </div>
    </div>
  );
};

export default Policies;
