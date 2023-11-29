import React, { useState } from 'react';
import './UserListCard.css';
import EditRoleCard from '../EditRoleCard/EditRoleCard';

const UserListCard = ({ userData, onDeleteUser }) => {
  const [showEditRolePopup, setShowEditRolePopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);  // Make sure to declare setSelectedUserId

  const openEditRolePopup = (user) => {
    console.log('Selected User:', user);
    setSelectedUserId(user);
    setShowEditRolePopup(true);
  };

  const closeEditRolePopup = () => {
    setShowEditRolePopup(false);
    setSelectedUserId(null);
  };

  // Filter users based on roleId
  const adminUsers = userData.filter((user) => user.roleId === '1');
  const moderadorUsers = userData.filter((user) => user.roleId === '2');
  const usuarioUsers = userData.filter((user) => user.roleId === '3');

  return (
    <div>
      <h2>Administrador</h2>
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
          {adminUsers.map((user) => (
            <tr key={user.id}>
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


      <h2>Moderador</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role ID</th>
            <th>Actions</th> {/* Added Actions column */}

          </tr>
        </thead>
        <tbody>
          {moderadorUsers.map((user) => (
            <tr key={user.id}>
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

      <h2>Usuario</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role ID</th>
            <th>Actions</th> {/* Added Actions column */}

          </tr>
        </thead>
        <tbody>
          {usuarioUsers.map((user) => (
            <tr key={user.id}>
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
      {showEditRolePopup && (
        <EditRoleCard userId={selectedUserId} onClose={closeEditRolePopup} userData={userData} />
      )}

    </div>
  );
};

export default UserListCard;
