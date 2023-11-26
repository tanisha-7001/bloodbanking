// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { listBlood} from './graphql/queries';

const AdminDashboard = ({ username, signOut }) => {
  const [bloodList, setBloodList] = useState([]);

  useEffect(() => {
    fetchBloodList();
  }, []);

  const fetchBloodList = async () => {
    try {
      const response = await Amplify.API.graphql(Amplify.graphqlOperation(listBlood));
      setBloodList(response.data.listBloods.items);
    } catch (error) {
      console.error('Error fetching blood list:', error);
    }
  };

  return (
    <div>
      <h1>Hello Admin {username}</h1>
      <button onClick={signOut}>Sign out</button>

      <h2>Available Blood</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Type</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {bloodList.map((blood) => (
            <tr key={blood.id}>
              <td>{blood.id}</td>
              <td>{blood.bloodType}</td>
              <td>{blood.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
