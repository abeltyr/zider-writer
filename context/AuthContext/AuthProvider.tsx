import React, { useState, useContext } from "react";

const initialValues = {
  user: {
    role: "guest",
  },
  loginAsBorrower: () => {},
};

const AuthContext = React.createContext(initialValues);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({ role: "guest" });

  const loginAsBorrower = () => {
    setUser({ role: "reader" });
  };
  return (
    <AuthContext.Provider value={{ user, loginAsBorrower }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
