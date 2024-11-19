import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-base font-bold my-1">{children}</h1>;
}
