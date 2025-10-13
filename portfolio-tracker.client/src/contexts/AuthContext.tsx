import { createContext} from "react";

// Create a context for authentication
export const AuthContext = createContext<{ isLoggedIn: boolean; login: () => void; logout: () => void } | undefined>(undefined);

