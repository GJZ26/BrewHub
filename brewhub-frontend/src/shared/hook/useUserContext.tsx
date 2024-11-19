import { useContext } from "react";
import { authenticatedUser, UserContext } from "../context/UserContext";

export default function useUserContext() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error(
      "Contexto fuera de alcance. "
    );
  }
  const { user, setUser } = context;

  function saveUser(user: authenticatedUser) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function clearUserData() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return { user, saveUser, clearUserData };
}
