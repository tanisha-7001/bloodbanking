import React, { useState } from 'react';
import {GraphQLAPI} from '@aws-amplify/api-graphql';
import { createBlood } from './graphql/mutations';
import { updateBlood } from './graphql/mutations'; 
import List1 from './vi';
import {listBlood} from  './graphql/queries';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [id, setId] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [bloodResult, setBloodResult] = useState('');
  const [bloodList, setBloodList] = useState('');

  const [isComponentVisible, setComponentVisibility] = useState(false);

  const handleClick = () => {
    setComponentVisibility(true);
  };

  const addBlood = async () => {
    try {
      const bloodEntry = {
        id: id,
        bloodType: bloodType,
        units: 1,
      };

      await GraphQLAPI.getGraphqlOperationType(createBlood, { input: bloodEntry });
      setBloodResult('Blood added successfully');
      fetchBloodList();
    } catch (error) {
      setBloodResult('Error adding blood entry');
    }
  };

  const updateBloodEntry = async (updatedBloodEntry) => {
    try {
      await GraphQLAPI.getGraphqlOperationType(updateBlood, { input: updatedBloodEntry });
      console.log('Blood updated successfully');
      fetchBloodList(); 
    } catch (error) {
      console.error('Error updating blood entry:', error);
    }
  };

  const fetchBloodList = async () => {
    try {
      const result = await GraphQLAPI.getGraphqlOperationType(listBlood);
      const bloodList = result.data.listBlood.items;
      setBloodList(bloodList);
    } catch (error) {
      console.error('Error fetching blood list:', error);
    }
  };

  return (
    <div>
      <div id="add">
        <form>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <label htmlFor="bloodType">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blood Type:</label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            placeholder="Enter Blood Type"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          />

          <button type="button" onClick={addBlood}>
            Add
          </button>
          <div>{bloodResult}</div>
        </form>
      </div>

      <div id="view">
        <button onClick={handleClick}>Show Available Blood</button>
        {isComponentVisible && <List1 updateBloodList={fetchBloodList} updateBloodEntry={updateBloodEntry} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
