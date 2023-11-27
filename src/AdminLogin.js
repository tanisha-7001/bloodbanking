import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export function AdminLogin({ signOut, user }) {
  return (
    <>
      <h1>Hello Admin</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(AdminLogin);