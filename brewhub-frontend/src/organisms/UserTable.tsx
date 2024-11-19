import { useState } from "react";
import ArrowDownIcon from "../atoms/ArrowDonwIcon";
import ArrowUpIcon from "../atoms/ArrowUpIcon";
import EditIcon from "../atoms/EditIcon";
import Title from "../atoms/Title";
import TrashIcon from "../atoms/TrashIcon";
import SearchInput from "../molecules/SearchInput";
import Modal from "./Modal";

const demos = [
  {
    id: 1,
    name: "Amani Dietrich",
    email: "phuels@example.org",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:55+00:00",
  },
  {
    id: 2,
    name: "Zane Rohan",
    email: "bhackett@example.com",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 3,
    name: "Donald Lubowitz",
    email: "tamia.farrell@example.org",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 4,
    name: "Erika Abernathy",
    email: "demetrius.zieme@example.org",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 5,
    name: "Mr. Andres Russel",
    email: "qkunze@example.com",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 6,
    name: "Mr. Armando Prosacco III",
    email: "kelvin.leffler@example.net",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 7,
    name: "Willard Hudson",
    email: "jerde.jayne@example.org",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 8,
    name: "Dr. Camren Herzog",
    email: "maximo.anderson@example.net",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 9,
    name: "Dr. Beulah Strosin",
    email: "tommie49@example.com",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 10,
    name: "Eliza Simonis",
    email: "mathew16@example.com",
    role: 0,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 11,
    name: "Diego López",
    email: "test@mail.com",
    role: 1,
    isActive: true,
    createdAt: "2024-11-18T20:35:56+00:00",
  },
  {
    id: 12,
    name: "Adolfo Juárez",
    email: "adolfo@gmail.com",
    role: 0,
    isActive: false,
    createdAt: "2024-11-18T20:52:36+00:00",
  },
];

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

function ToggleSwitch({
  isActive,
  onChange,
}: {
  isActive: boolean;
  onChange: () => void;
}) {
  return (
    <div
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
        isActive ? "bg-orange-800" : "bg-gray-300"
      }`}
      onClick={onChange}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
          isActive ? "translate-x-5" : "translate-x-0"
        } transition-transform`}
      ></div>
    </div>
  );
}

export default function UserTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(undefined);

  const toggleActive = (id: number) => {
    const user = demos.find((u) => u.id === id);
    if (user) {
      user.isActive = !user.isActive;
    }
  };

  return (
    <div className="p-4 bg-white my-3 mx-4 shadow-md rounded-sm">
      <Modal isActive={isModalOpen} setIsActive={setIsModalOpen} user={currentUser}/>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Title>Usuarios</Title>
        <SearchInput placeholder="Buscar usuarios" />
      </div>
      {/* Table */}
      <table className="w-full border-collapse text-left">
        <thead className="bg-yellow-950 text-white">
          <tr>
            <th className="px-5 py-2 font-normal text-sm">
              Nombre
              <ArrowDownIcon />
            </th>
            <th className="px-5 py-2 font-normal text-sm">
              Correo <ArrowUpIcon />
            </th>
            <th className="px-5 py-2 font-normal text-sm">
              Fecha de creación <ArrowDownIcon />
            </th>
            <th className="px-5 py-2 font-normal text-sm">
              Acciones <ArrowDownIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {demos.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-200 hover:bg-gray-50 even:bg-yellow-800 even:bg-opacity-5"
            >
              <td className="py-3 px-5 text-sm">{user.name}</td>
              <td className="py-3 px-5 text-sm">{user.email}</td>
              <td className="py-3 px-5 text-sm">
                {formatDate(user.createdAt)}
              </td>
              <td className="py-3 px-5 flex items-center gap-2 text-yellow-950">
                <ToggleSwitch
                  isActive={user.isActive}
                  onChange={() => toggleActive(user.id)}
                />
                <button
                  className="hover:text-yellow-900 transition-colors"
                  onClick={() => {
                    setIsModalOpen(true);
                    setCurrentUser(user);
                  }}
                >
                  <EditIcon />
                </button>
                <button className="hover:text-yellow-900 transition-colors">
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
