import { ReactNode } from "react";

export default function VerticalInputLabel({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <label className="flex flex-col space-y-2 font-normal text-xs mt-4 text-orange-950">
      {text}
      {children}
    </label>
  );
}
