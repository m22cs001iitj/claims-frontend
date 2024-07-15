import React, { useState } from 'react';

const Claims = () => {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  const handleAddPolicy = () => {
    setShowAdditionalCards(true);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Claims</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ADD8E6', width: '200px', textAlign: 'center' }}>
          <h3>Home Insurance</h3>
        </div>
        {showAdditionalCards && (
          <>
            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#90EE90', width: '200px', textAlign: 'center' }}>
              <h3>Car Insurance</h3>
              <p>Amount: 10000</p>
            </div>
            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#FFB6C1', width: '200px', textAlign: 'center' }}>
              <h3>Life Insurance</h3>
              <p>Amount: 50000</p>
            </div>
          </>
        )}
      </div>
      <button 
        onClick={handleAddPolicy} 
        style={{
          padding: '10px 20px',
          borderRadius: '50px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Add Policy
      </button>
    </div>
  );
};

export default Claims;
