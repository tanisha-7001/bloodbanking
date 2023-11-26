// AdminDashboard.js

import React from 'react';

const AdminDashboard = ({ username, signOut }) => (
  <div>
    <h1>Hello User {username}</h1>
    {/* User-specific content */}
    <button onClick={signOut}>Sign out</button>
  </div>
);

export default AdminDashboard;
