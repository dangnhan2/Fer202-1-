import React, { useState, createContext } from "react";
const UserContext = createContext({ username: "", auth: false });
const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  // Login updates the user data with a name parameter
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <UserContext.Provider
      value={{
        username,
        password,
        status,
        setStatus,
        setUsername,
        setPassword,
        handlePassword,
        handleUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
