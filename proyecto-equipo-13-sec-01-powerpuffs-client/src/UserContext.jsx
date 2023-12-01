import React, { createContext, useContext, useState, useEffect } from 'react';
import { user } from './components/initial-data'
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user2, setUser] = useState(user[null]); // Initialize with the first user

  // Function to set the user and store it in localStorage
  const setUserAndRole = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to clear the user data
  const clearUserData = () => {
    setUser(null); // Set to null or an initial value as needed
    localStorage.removeItem('user');
  };

  // Check localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user2, setUserAndRole, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};


