import React, { useState } from 'react';
import './UserListCard.css';
import EditRoleCard from '../EditRoleCard/EditRoleCard';
import { deleteUserById } from '../../initial-data'; // Update the path

const UserTable = ({ users, onDeleteUser, openEditRolePopup }) => {
  
  const handleDeleteUser = (userId) => {
    // Delete user from the initial data
    deleteUserById(userId);

    // Call the onDeleteUser function
    onDeleteUser(userId);
  };

  return (
    <table border="1">
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
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.userLastName}</td>
            <td>{user.userEmail}</td>
            <td>{user.roleId}</td>
            <td>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <button onClick={() => openEditRolePopup(user.id)}>Edit Role</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UserListCard = ({ userData, setUserData }) => {
  const [showEditRolePopup, setShowEditRolePopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');

  const openEditRolePopup = (userId) => {
    console.log('Selected User ID:', userId);
    setSelectedUserId(userId);
    setShowEditRolePopup(true);
  };

  const closeEditRolePopup = () => {
    setShowEditRolePopup(false);
    setSelectedUserId(null);
  };

  const onDeleteUser = (userId) => {
    // Filter out the user with the specified ID
    const updatedUserData = userData.filter((user) => user.id !== userId);
    setUserData(updatedUserData);

    // Set the delete message
    setDeleteMessage(`User with ID ${userId} has been deleted.`);
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
      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
  );
};

export default UserListCard;