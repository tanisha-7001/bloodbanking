import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import AdminDashboard from './AdminDashboard';
Amplify.configure(config);

function AdminLogin({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <AdminDashboard/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(AdminLogin);