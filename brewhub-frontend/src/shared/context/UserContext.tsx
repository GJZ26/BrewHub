import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

interface UserContextState {
  user: authenticatedUser | null;
  setUser: Dispatch<SetStateAction<authenticatedUser | null>>;
}

export interface authenticatedUser {
  createdAt: string;
  email: string;
  id: number;
  isActive: boolean;
  name: string;
  role: 0 | 1;
  token: string;
  expireAt: string;
}

export const UserContext = createContext<UserContextState | null>(null);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<authenticatedUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
