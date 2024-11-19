import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-orange-950 text-xs">{children}</p>;
}
