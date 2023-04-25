import { ReactNode, useReducer } from "react";
import AuthContext from "./contexts/authContext";
import loginReducer from "./reducers/loginReducer";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
