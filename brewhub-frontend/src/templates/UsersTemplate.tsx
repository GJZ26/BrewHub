import Button from "../atoms/Buttons";
import UserTable from "../organisms/UserTable";

export default function UserTemplate() {
  return (
    <main className="bg-yellow-50 py-5 flex flex-col">
      <div className="flex justify-end mb-5">
        <Button className="max-w-52 mr-5">Agregar usuario</Button>
      </div>
      <UserTable />
    </main>
  );
}
