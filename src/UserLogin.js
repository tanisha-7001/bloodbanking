import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import UserDashboard from './UserDashboard';

function UserLogin({ signOut, user }) {
  return (
    <>
      <h1  style={{marginLeft:620}}>Hello User</h1>
      <UserDashboard/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(UserLogin);