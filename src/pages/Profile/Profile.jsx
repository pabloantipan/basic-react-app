
// import React from 'react';

const Profile = () => {
    const token = localStorage.getItem('token')
  return (
    <div>
      <h1>Profile Page</h1>
      {token && <p>Token: {token}</p>}
      {!token && <p>You are not logged in</p>}
    </div>
  );
};

export default Profile;