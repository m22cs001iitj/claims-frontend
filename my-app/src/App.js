import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Claims from './components/Claims';
import Policies from './components/Policies';
import PolicyHolders from './components/PolicyHolders';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policy-holders" element={<PolicyHolders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
