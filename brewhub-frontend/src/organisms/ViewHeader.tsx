import SectionTitle from "../molecules/SectionTitle";
import UserTab from "../molecules/UserTab";
import useUserContext from "../shared/hook/useUserContext";

export default function ViewHeader({ className }: { className?: string }) {
  const { user } = useUserContext();
  return (
    <header
      className={"flex flex-row w-full bg-slate-0 border-b-2 py-2 " + className}
    >
      <SectionTitle />
      <UserTab
        name={user !== null ? user.name : ""}
        role={user ? user.role : 0}
      />
    </header>
  );
}
