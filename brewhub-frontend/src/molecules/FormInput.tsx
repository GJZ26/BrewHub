import { HTMLInputTypeAttribute } from "react";
import Input from "../atoms/Input";
import VerticalInputLabel from "../atoms/VerticalInputLabel";
import Password from "../atoms/Password";

export default function FormInput({
  type,
  placeholder,
  label,
  defaultValue,
}: {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  defaultValue?: string | number | readonly string[];
}) {
  const input =
    type === "password" ? (
      <Password placeholder={placeholder as string} />
    ) : (
      <Input
        type={type}
        placeholder={placeholder ?? ""}
        defaultValue={defaultValue ?? ""}
      />
    );
  return <VerticalInputLabel text={label}>{input}</VerticalInputLabel>;
}
