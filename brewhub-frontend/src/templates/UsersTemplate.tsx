import Button from "../atoms/Buttons";
import UserTable from "../organisms/UserTable";

export default function UserTemplate() {
  return (
    <main className="bg-yellow-50">
      <Button>Agregar usuario</Button>
      <UserTable />
    </main>
  );
}
