import { Logo } from "../atoms/Logo";
import LogOutIcon from "../atoms/LogOutIcon";
import NavigationButton from "../molecules/NavigationButton";
import ListNavigationButtons from "./ListNavigationButtons";

export default function SideNavigation({ className }: { className?: string }) {
  return (
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
        to="/logout"
        disabled={false}
        className="text-orange-100 text-sm ml-2 opacity-80 hover:opacity-100 transition-colors"
      />
    </nav>
  );
}
