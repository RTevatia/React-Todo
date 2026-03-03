import { createContext, Dispatch } from "react";
import { AuthAction } from "././AuthProvider";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;
