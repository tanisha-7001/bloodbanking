import React, { useState } from 'react';

const UserDashboard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [hasFever, setHasFever] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, age, weight, hasFever });
  };

  return (
    <>
      <h1 style={{marginLeft:550}}>Donation Form</h1>
      <div>
        <form style={{marginLeft:300, fontSize:20}} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={{marginLeft:30}} htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <label  style={{marginLeft:30}} htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <div>
            <label>
              <input  style={{marginTop:30}}
                type="checkbox"
                checked={hasFever}
                onChange={(e) => setHasFever(e.target.checked)}
              />
              Suffered from Fever in the past 14 days?
            </label>
          </div>

          <button  style={{fontSize:30,marginLeft:420}} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserDashboard;