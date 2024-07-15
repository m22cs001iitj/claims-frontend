import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/claims" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ADD8E6', width: '200px', textAlign: 'center', textDecoration: 'none', color: 'black' }}>
          <h3>Claims</h3>
          <p>Claim details</p>
        </Link>
        <Link to="/policies" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#90EE90', width: '200px', textAlign: 'center', textDecoration: 'none', color: 'black' }}>
          <h3>Policies</h3>
          <p>Policy details</p>
        </Link>
        <Link to="/policy-holders" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#FFB6C1', width: '200px', textAlign: 'center', textDecoration: 'none', color: 'black' }}>
          <h3>Policy Holders</h3>
          <p>Policy holder details</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
