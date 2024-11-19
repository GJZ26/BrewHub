import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
  className,
  disabled = false,
  submit = false,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  disabled?: boolean;
  submit?: boolean;
}) {
  return (
    <button
      className={`bg-yellow-800 text-white font-medium py-2 px-4 rounded text-center w-full text-xs hover:bg-yellow-900 transition-colors disabled:bg-opacity-45 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
}
