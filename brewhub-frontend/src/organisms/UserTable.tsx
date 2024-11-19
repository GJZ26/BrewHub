import { useState, useMemo } from "react";
import useUserListContext from "../shared/hook/userUserListContext";
import TableHead from "../atoms/display/TableHead";
import UserTableRow from "../molecules/UserTableRow";
import TableTitle from "../molecules/TableTitle";
import { DataSorted } from "../shared/interface/Sortable";

export default function UserTable() {
  const [sortedBy, setSortedBy] = useState<DataSorted>({
    ascending: true,
    key: "createdAt",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const { userList } = useUserListContext();

  // Lista ordenada
  const sortedUserList = useMemo(() => {
    if (!userList) return [];
    const sorted = [...userList].sort((a, b) => {
      const { key, ascending } = sortedBy;
      const fieldA = a[key]?.toLowerCase?.() || a[key];
      const fieldB = b[key]?.toLowerCase?.() || b[key];

      if (fieldA < fieldB) return ascending ? -1 : 1;
      if (fieldA > fieldB) return ascending ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [userList, sortedBy]);

  // Lista filtrada
  const filteredUserList = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return sortedUserList.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(lowercasedTerm)
      )
    );
  }, [sortedUserList, searchTerm]);

  function renderBodyTable() {
    if (filteredUserList.length === 0) {
      return (
        <tr>
          <td colSpan={4} className="text-center py-3">
            {userList && sortedUserList.length === 0
              ? "No hay usuarios disponibles"
              : "No se encontraron coincidencias"}
          </td>
        </tr>
      );
    }

    return filteredUserList.map((user) => (
      <UserTableRow key={user.id} userData={user} />
    ));
  }

  return (
    <div className="p-4 bg-white my-3 mx-4 shadow-md rounded-sm">
      <TableTitle onInput={(e) => setSearchTerm(e.currentTarget.value)} />

      <table className="w-full border-collapse text-left">
        <thead className="bg-yellow-950 text-white">
          <tr>
            <TableHead
              text="Nombre"
              sortKey="name"
              currentSort={sortedBy}
              setCurrentSort={setSortedBy}
            />
            <TableHead
              text="Correo"
              sortKey="email"
              currentSort={sortedBy}
              setCurrentSort={setSortedBy}
            />
            <TableHead
              text="Fecha de Creación"
              sortKey="createdAt"
              currentSort={sortedBy}
              setCurrentSort={setSortedBy}
            />
            <TableHead text="Acciones" />
          </tr>
        </thead>

        <tbody>{renderBodyTable()}</tbody>
      </table>
    </div>
  );
}
