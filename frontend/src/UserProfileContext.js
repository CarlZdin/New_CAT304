import React, { createContext, useState } from 'react';

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: 'Alexis Wolen',
    email: 'jakegyll@email.com',
    about: 'I’m a product designer...',
    // Add more fields as needed
  });

  const updateUserInfo = (newInfo) => {
    setUserInfo(newInfo);
  };

  return (
    <UserProfileContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserProfileContext.Provider>
  );
};
