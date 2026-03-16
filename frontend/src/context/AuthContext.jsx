import { createContext } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {

  const serverUrl = "https://style-baazar.onrender.com";

  const value = {
    serverUrl
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;