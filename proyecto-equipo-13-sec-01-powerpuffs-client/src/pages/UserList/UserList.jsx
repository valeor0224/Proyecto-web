import React from 'react';
import './UserList.css';
import UserListCard from '../../components/cards/UserListCard/UserListCard';
import { user as userData } from '../../components/initial-data';

function UserList() {
  return (
    <>
      <div className="user-list">
        <UserListCard userData={userData} />
      </div>
    </>
  );
}

export default UserList;
