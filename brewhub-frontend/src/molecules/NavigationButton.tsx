import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function NavigationButton({
  to,
  text,
  disabled,
  icon,
  className,
}: {
  to: string;
  text: string;
  disabled: boolean;
  icon: ReactNode;
  className?: string;
}) {
  const sharedClass =
    "flex flex-row gap-2 font-sm text-white mb-5 ";
  if (disabled) {
    return (
      <p
        className={
          sharedClass +
          "cursor-not-allowed text-gray-500 opacity-70 " +
          className
        }
      >
        {icon}
        {text}
      </p>
    );
  }
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${sharedClass} cursor-pointer ${
          isActive ? "bg-orange-300" : ""
        } bg-opacity-85 hover:bg-opacity-100 transition-colors rounded p-1 ${className}`
      }
    >
      {icon}
      {text}
    </NavLink>
  );
}
