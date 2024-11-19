import Checkbox from "../atoms/forms/Checkbox";
import HorizontalInputLabel from "../atoms/layouts/HorizontalInputLabel";

export default function FormCheckbox({
  defaultChecked,
  text,
  onInput,
}: {
  defaultChecked: boolean;
  text: string;
  onInput?: React.FormEventHandler;
}) {
  return (
    <HorizontalInputLabel text={text}>
      <Checkbox defaultChecked={defaultChecked} onInput={onInput} />
    </HorizontalInputLabel>
  );
}
