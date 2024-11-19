import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-gray-600 text-xs mb-5">{children}</p>;
}
