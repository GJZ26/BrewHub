import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

import UserAttribute from "../interface/UserAttributes";
import { authRequestConfig, request } from "../HTTP/Request";
import useUserContext from "../hook/useUserContext";

interface UserListContextState {
  userList: UserAttribute[] | null;
  setUserList: Dispatch<SetStateAction<UserAttribute[] | null>>;
}

export const UserListContext = createContext<UserListContextState | null>(null);

export function UserListContextProvider({ children }: { children: ReactNode }) {
  const [userList, setUserList] = useState<UserAttribute[] | null>(null);
  const { user } = useUserContext();

  useEffect(() => {
    if (user == null) {
      return;
    }

    request
      .get("/api/user", authRequestConfig(user?.token))
      .then((response) => {
        setUserList(response.data);
      });
  }, [user]);

  const value = useMemo(() => ({ userList, setUserList }), [userList]);
  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
}
