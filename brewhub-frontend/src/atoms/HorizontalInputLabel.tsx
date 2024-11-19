import { ReactNode } from "react";

export default function HorizontalInputLabel({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <label className="flex flex-row-reverse justify-end space-y-2 font-medium text-xs mb-4">
      {text}
      {children}
    </label>
  );
}
