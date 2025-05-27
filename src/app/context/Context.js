'use client';

import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const LoggedDataContext = createContext();

// Provider Component
export const LoggedDataProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState(null);

  // Function to update user data globally and save in localStorage safely
  const updateLoggedUserData = (data) => {
    setLoggedUserData(data);

    // localStorage access only on client-side
    if (data && typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(data));
    }

    console.log('Logged-in user data stored in context and localStorage:', data);
  };

  // Load user data from localStorage when app loads, only on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setLoggedUserData(JSON.parse(storedUser));
        console.log('User data restored from localStorage:', JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <LoggedDataContext.Provider value={{ loggedUserData, updateLoggedUserData }}>
      {children}
    </LoggedDataContext.Provider>
  );
};
