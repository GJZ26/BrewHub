import { useState } from "react";
import Button from "../atoms/Buttons";
import Modal from "../organisms/Modal";
import UserTable from "../organisms/UserTable";

export default function UserTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="bg-yellow-50 py-5 flex flex-col">
      <div className="flex justify-end mb-5">
        <Button
          className="max-w-52 mr-5"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Agregar usuario
        </Button>
      </div>
      <UserTable />
      <Modal isActive={isModalOpen} setIsActive={setIsModalOpen} />
    </main>
  );
}
