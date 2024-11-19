import { Logo } from "../atoms/media/Logo";
import LogOutIcon from "../atoms/icons/LogOutIcon";
import NavigationButton from "../molecules/NavigationButton";
import useUserContext from "../shared/hook/useUserContext";
import { authRequestConfig, request } from "../shared/HTTP/Request";
import ListNavigationButtons from "./ListNavigationButtons";
import { useNavigate } from "react-router-dom";

export default function SideNavigation({ className }: { className?: string }) {
  const { user, clearUserData } = useUserContext();
  const navigate = useNavigate();
  function logoutHandler() {
    request
      .get("/api/auth/logout", authRequestConfig(user?.token))
      .finally(() => {
        clearUserData();
        navigate("/");
      });
  }
  return (
    <>
      <nav
        className={
          "bg-yellow-950 opacity-90 text-orange-200 py-3 flex flex-col justify-between h-screen " +
          className
        }
      >
        <div>
          <Logo version="white" className="w-20 mb-5" />
          <ListNavigationButtons />
        </div>

        <NavigationButton
          icon={<LogOutIcon />}
          text="Cerrar Sesión"
          to="/"
          disabled={false}
          className="text-orange-100 text-sm ml-2 opacity-80 hover:opacity-100 transition-colors "
          onClick={logoutHandler}
        />
      </nav>
    </>
  );
}
