import { withAuthenticator } from '@aws-amplify/ui-react';
import AdminDashboard from './AdminDashboard';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';


function AdminLogin({ signOut, user }) {
  return (
    <>
      <h1 style={{marginLeft:580,marginBottom:140}}>Hello Admin</h1>
      <AdminDashboard />
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(AdminLogin);
