import Checkbox from "../atoms/Checkbox";
import HorizontalInputLabel from "../atoms/HorizontalInputLabel";

export default function FormCheckbox({
  defaultChecked,
  text,
}: {
  defaultChecked: boolean;
  text: string;
}) {
  return (
    <HorizontalInputLabel text={text}>
      <Checkbox defaultChecked={defaultChecked} />
    </HorizontalInputLabel>
  );
}
