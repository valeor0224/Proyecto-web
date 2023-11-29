import React from 'react';

const UserListCard = ({ userData, onDeleteUser }) => {
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
            <th>Actions</th> {/* Added Actions column */}
            {/* Add other columns as needed */}
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
              </td>
              {/* Add other columns as needed */}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListCard;
