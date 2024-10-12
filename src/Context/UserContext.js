import React, { useState, useEffect, createContext } from "react";
const UserContext = createContext({ username: "", auth: false });
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", auth: false });

  // Login updates the user data with a name parameter
  const login = (username) => {
    setUser((user) => ({
      username: username,
      auth: true,
    }));
    localStorage.setItem("username", username);
  };

  // Logout updates the user data to default
  const logout = () => {
    localStorage.removeItem("username");
    setUser((user) => ({
      username: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
