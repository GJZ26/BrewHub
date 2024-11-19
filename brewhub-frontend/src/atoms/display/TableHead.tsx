import { DataSorted, SortableKey } from "../../organisms/UserTable";
import ArrowDownIcon from "../icons/ArrowDonwIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

export default function TableHead({
  text,
  sortKey,
  currentSort,
  setCurrentSort,
}: {
  text: string;
  sortKey?: SortableKey;
  currentSort?: DataSorted;
  setCurrentSort?: React.Dispatch<React.SetStateAction<DataSorted>>;
}) {
  function cellHeadClickHandler() {
    if (sortKey === undefined) return;
    if (setCurrentSort === undefined) return;
    setCurrentSort({
      key: sortKey,
      ascending: !currentSort?.ascending,
    });
  }
  return (
    <th
      className="px-5 py-2 font-normal text-sm cursor-pointer"
      onClick={cellHeadClickHandler}
    >
      {text}
      {currentSort?.key !== sortKey || sortKey === undefined ? (
        <></>
      ) : currentSort?.ascending ? (
        <ArrowDownIcon />
      ) : (
        <ArrowUpIcon />
      )}
    </th>
  );
}
