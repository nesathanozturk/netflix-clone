import React, { useState, createContext } from "react";

const AuthContext = createContext();

const Provider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const valueToShare = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
};

export { Provider };
export default AuthContext;
