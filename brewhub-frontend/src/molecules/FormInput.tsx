import { HTMLInputTypeAttribute } from "react";
import Input from "../atoms/forms/Input";
import VerticalInputLabel from "../atoms/layouts/VerticalInputLabel";
import Password from "../atoms/forms/Password";

export default function FormInput({
  type,
  placeholder,
  label,
  defaultValue,
  onInput,
  required = true,
}: {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  defaultValue?: string | number | readonly string[];
  onInput: React.FormEventHandler<HTMLInputElement>;
  required?: boolean;
}) {
  const input =
    type === "password" ? (
      <Password
        placeholder={placeholder as string}
        onInput={onInput}
        required={required}
        defaultValue={(defaultValue as string) ?? ""}
      />
    ) : (
      <Input
        type={type}
        placeholder={placeholder ?? ""}
        defaultValue={defaultValue ?? ""}
        onInput={onInput}
        required={required}
      />
    );
  return <VerticalInputLabel text={label}>{input}</VerticalInputLabel>;
}
