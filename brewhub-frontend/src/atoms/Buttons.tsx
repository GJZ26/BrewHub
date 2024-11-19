import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
}) {
  return (
    <button
      className="bg-yellow-800 text-white font-medium py-2 px-4 rounded text-center w-full text-xs hover:bg-yellow-900 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
