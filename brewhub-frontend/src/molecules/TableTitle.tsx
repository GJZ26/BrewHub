import Title from "../atoms/display/Title";
import SearchInput from "./SearchInput";

export default function TableTitle({
  onInput,
}: {
  onInput: React.FormEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      <Title>Usuarios</Title>
      <SearchInput placeholder="Buscar usuarios" onInput={onInput} />
    </div>
  );
}
