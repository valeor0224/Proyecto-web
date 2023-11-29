import React, { useState } from 'react';
import './UserListCard.css';
import EditRoleCard from '../EditRoleCard/EditRoleCard';

const UserTable = ({ users, onDeleteUser, openEditRolePopup }) => {
  return (
    <table className='user-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="rounded-row"> {/* Add the rounded-row class */}
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.userLastName}</td>
            <td>{user.userEmail}</td>
            <td>{user.roleId}</td>
            <td>
              <button onClick={() => onDeleteUser(user.id)}>Delete</button>
              <button onClick={() => openEditRolePopup(user.id)}>Edit Role</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UserListCard = ({ userData, onDeleteUser }) => {
  const [showEditRolePopup, setShowEditRolePopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const openEditRolePopup = (userId) => {
    console.log('Selected User ID:', userId);
    setSelectedUserId(userId);
    setShowEditRolePopup(true);
  };

  const closeEditRolePopup = () => {
    setShowEditRolePopup(false);
    setSelectedUserId(null);
  };

  const renderUserTables = (role, users) => {
    return (
      <div key={role}>
        <h2>{role}</h2>
        <UserTable users={users} onDeleteUser={onDeleteUser} openEditRolePopup={openEditRolePopup} />
      </div>
    );
  };

  const roles = {
    '1': 'Administrador',
    '2': 'Moderador',
    '3': 'Usuario',
  };

  const userTables = Object.entries(roles).map(([roleId, roleName]) => {
    const usersByRole = userData.filter((user) => user.roleId === roleId);
    return renderUserTables(roleName, usersByRole);
  });

  return (
    <div>
      {userTables}
      {showEditRolePopup && (
        <EditRoleCard userId={selectedUserId} onClose={closeEditRolePopup} userData={userData} />
      )}
    </div>
  );
};

export default UserListCard;
