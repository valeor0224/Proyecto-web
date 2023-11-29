import React from 'react';
import './UserList.css';
import UserListCard from '../../components/cards/UserListCard/UserListCard';
import { userData } from '../../components/initial-data';

function UserList() {
  const handleDeleteUser = (userId) => {
    // Implement logic to delete the user with the specified userId
    console.log(`Delete user with ID: ${userId}`);
  };

  return (
    <>
      <div className="user-list">
        <UserListCard userData={userData} onDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}

export default UserList;
