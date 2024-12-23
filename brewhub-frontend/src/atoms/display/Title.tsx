import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-orange-950 text-base font-bold my-1">{children}</h1>
  );
}
