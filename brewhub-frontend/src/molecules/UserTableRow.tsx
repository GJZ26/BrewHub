import { toast } from "sonner";
import EditIcon from "../atoms/icons/EditIcon";
import Notifier from "../atoms/display/Notifier";
import ToggleSwitch from "../atoms/forms/ToggleSwitch";
import TrashIcon from "../atoms/icons/TrashIcon";
import useUserContext from "../shared/hook/useUserContext";
import { authRequestConfig, request } from "../shared/HTTP/Request";
import UserAttribute from "../shared/interface/UserAttributes";
import useUserListContext from "../shared/hook/userUserListContext";
import Modal from "../organisms/Modal";
import { useState } from "react";

export default function UserTableRow({
  userData,
}: {
  userData: UserAttribute;
}) {
  const { user } = useUserContext();
  const { remove, addOrUpdate } = useUserListContext();
  const [isModalActive, setIsModalActive] = useState(false);

  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
      "es-ES",
      options
    );
    const [day, month, year] = formattedDate.split(" ");
    return `${day}/${month.charAt(0).toUpperCase() + month.slice(1)}/${year}`;
  }

  return (
    <>
      <Modal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        user={userData}
        onSubmit={(_, u) => {
          request
            .put(`/api/user/${userData.id}`, u, authRequestConfig(user?.token))
            .then((response) => {
              addOrUpdate(response.data);
              toast.success(`Se actualizó a ${userData.name} correctamente.`);
            });
        }}
      />
      <tr className="border-t border-gray-200 hover:bg-gray-50 even:bg-yellow-800 even:bg-opacity-5">
        <td className="py-3 px-5 text-sm">{userData.name}</td>
        <td className="py-3 px-5 text-sm">{userData.email}</td>
        <td className="py-3 px-5 text-sm">{formatDate(userData.createdAt)}</td>
        <td className="py-3 px-5 flex items-center gap-2 text-yellow-950">
          <ToggleSwitch
            isActive={userData.isActive}
            onChange={() => {
              request
                .put(
                  `/api/user/${userData.id}`,
                  {
                    name: userData.name,
                    email: userData.email,
                    role: userData.role,
                    isActive: !userData.isActive,
                  },
                  authRequestConfig(user?.token)
                )
                .then((response) => {
                  addOrUpdate(response.data);
                  toast.success(
                    `Se actualizó a ${userData.name} correctamente.`
                  );
                });
            }}
          />
          <button
            className="hover:text-yellow-900 transition-colors"
            onClick={() => {
              setIsModalActive(true);
            }}
          >
            <EditIcon />
          </button>
          <button
            className="hover:text-yellow-900 transition-colors"
            onClick={() => {
              request
                .delete(
                  `/api/user/${userData.id}`,
                  authRequestConfig(user?.token)
                )
                .then(() => {
                  remove(userData.id);
                  toast.success("Usuario eliminado con éxito");
                });
            }}
          >
            <Notifier />
            <TrashIcon />
          </button>
        </td>
      </tr>
    </>
  );
}
