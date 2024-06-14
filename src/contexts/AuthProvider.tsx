import React from "react";

const AuthContext = React.createContext<any>({});

export const AuthProvider = ({ children }: any) => {
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;