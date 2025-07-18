import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ width: '200px', background: '#f4f4f4', padding: '1rem' }}>
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vote">Vote</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </div>
    <div style={{ flex: 1, padding: '1rem' }}>
      {children}
    </div>
  </div>
);

export default Layout;