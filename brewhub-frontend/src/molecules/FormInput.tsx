import { HTMLInputTypeAttribute } from "react";
import Input from "../atoms/Input";
import VerticalInputLabel from "../atoms/VerticalInputLabel";

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
  return (
    <VerticalInputLabel text={label}>
      <Input
        type={type}
        placeholder={placeholder ?? ""}
        defaultValue={defaultValue ?? ""}
      />
    </VerticalInputLabel>
  );
}
