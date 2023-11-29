import React, { useState } from 'react';
import './UserList.css';
import UserListCard from '../../components/cards/UserListCard/UserListCard';
import { user as initialUserData } from '../../components/initial-data';  // Renamed the imported constant

function UserList() {
  const [userData, setUserData] = useState(initialUserData);  // Used the imported constant for initial state
  return (
    <>
      <div className="user-list">
        <UserListCard userData={userData} setUserData={setUserData} />  {/* Passed setUserData as a prop */}
      </div>
    </>
  );
}

export default UserList;
