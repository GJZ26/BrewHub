import { useState } from "react";
import Button from "../atoms/forms/Buttons";
import Modal from "../organisms/Modal";
import UserTable from "../organisms/UserTable";
import { authRequestConfig, request } from "../shared/HTTP/Request";
import useUserContext from "../shared/hook/useUserContext";
import Notifier from "../atoms/display/Notifier";
import { toast } from "sonner";
import useUserListContext from "../shared/hook/userUserListContext";
import UserModifiable from "../shared/interface/UserModifiables";

export default function UserTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useUserContext();
  const { addOrUpdate } = useUserListContext();

  function submitHandler(
    _: React.FormEvent<HTMLFormElement>,
    userModified: UserModifiable
  ) {
    request
      .post("/api/user", userModified, authRequestConfig(user?.token))
      .then((response) => {
        addOrUpdate(response.data);
        toast.success(`Se añadió a ${userModified.name} correctamente.`);
      })
      .catch((err) => {
        if (err.response.status < 500) {
          toast.error(err.response.data.message);
        } else {
          toast.error(
            "Ha ocurrido un error durante tu autenticación.\nInténtelo más tarde."
          );
        }
      })
      .finally(() => {
        setIsModalOpen(false);
      });
  }

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
      <Notifier />

      <Modal
        isActive={isModalOpen}
        setIsActive={setIsModalOpen}
        onSubmit={submitHandler}
      />
    </main>
  );
}
