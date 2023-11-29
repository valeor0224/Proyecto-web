import React, { useState } from 'react';
import './UserList.css';
import UserListCard from '../../components/cards/UserListCard/UserListCard';
import EditRoleCard from '../../components/cards/EditRoleCard/EditRoleCard';
import { user as userData } from '../../components/initial-data';

function UserList() {
    const [showEditRolePopup, setShowEditRolePopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openEditRolePopup = (userId) => {
        console.log('Selected User ID:', userId);
        setSelectedUser(userId);
        setShowEditRolePopup(true);
    };


    const closeEditRolePopup = () => {
        setShowEditRolePopup(false);
        setSelectedUser(null);
    };

    return (
        <>
            <div className="user-list">
                <UserListCard
                    userData={userData}
                    onDeleteUser={(userId) => console.log(`Delete user with ID ${userId}`)}
                    onEditRole={(user) => openEditRolePopup(user)}
                />
            </div>

            {showEditRolePopup && selectedUser && (
                <EditRoleCard
                    user={selectedUser}
                    onClose={closeEditRolePopup}
                />
            )}
        </>
    );
}

export default UserList;
