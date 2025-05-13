import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [Authenticated, setAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ Authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
