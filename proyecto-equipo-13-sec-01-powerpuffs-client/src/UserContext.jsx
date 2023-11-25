// UserContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  // Function to set the role and store it in localStorage
  const setRole = (roleId) => {
    setUserRole(roleId);
    localStorage.setItem('userRole', JSON.stringify(roleId));
  };

  // Check localStorage when the component mounts
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(JSON.parse(storedRole));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userRole, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

