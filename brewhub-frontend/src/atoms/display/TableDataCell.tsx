import { ReactNode } from "react";

export default function TableDataCell({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return <td className={`py-3 px-5 text-sm ${className}`}>{children}</td>;
}
