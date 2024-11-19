import { useContext } from "react";
import { UserListContext } from "../context/UserListContext";
import UserAttribute from "../interface/UserAttributes";

export default function useUserListContext() {
  const context = useContext(UserListContext);
  if (context === null) {
    throw new Error("Contexto fuera del alcance.");
  }
  const { userList, setUserList } = context;

  function addOrUpdate(user: UserAttribute) {
    setUserList((prevUserList) => {
      if (prevUserList === null) return null;
      const index = prevUserList.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        const updatedList = [...prevUserList];
        updatedList[index] = user;
        return updatedList;
      }
      return [...prevUserList, user];
    });
  }

  function remove(id: number) {
    setUserList((prevUserList) => {
      if (prevUserList === null) return null; // Si no hay lista, retorna null
      return prevUserList.filter((user) => user.id !== id); // Filtra los usuarios que no coincidan con el id
    });
  }

  return { userList, addOrUpdate, remove };
}
