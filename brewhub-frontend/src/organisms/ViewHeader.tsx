import SectionTitle from "../molecules/SectionTitle";
import UserTab from "../molecules/UserTab";

export default function ViewHeader() {
  return (
    <header className="flex flex-row w-full bg-slate-0 border-b-2 py-2">
      <SectionTitle />
      <UserTab name={"Diego López"} role={1} />
    </header>
  );
}
