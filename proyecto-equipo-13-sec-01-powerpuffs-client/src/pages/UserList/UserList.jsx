import React, { useState } from 'react';
import './UserList.css';
import UserListCard from '../../components/cards/UserListCard/UserListCard';
import { user as userData } from '../../components/initial-data';

function UserList() {

  return (
    <>
      <div className="user-list-page">
        <h1>LISTA DE USUARIOS</h1>
        <div className='user-list-container'>
          <div className='tab-userlist'>
            <h2>
              Usuarios
            </h2>
          </div>
          <UserListCard userData={userData} />

        </div>

      </div>
    </>
  );
}

export default UserList;
