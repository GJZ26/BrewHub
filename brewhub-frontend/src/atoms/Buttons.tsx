import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?:string
}) {
  return (
    <button
      className={`bg-yellow-800 text-white font-medium py-2 px-4 rounded text-center w-full text-xs hover:bg-yellow-900 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
