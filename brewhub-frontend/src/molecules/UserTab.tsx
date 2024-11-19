import Avatar from "../atoms/media/Avatar";

const roles = ["Client", "Admin"];

export default function UserTab({
  name,
  role,
  avatar,
}: {
  name: string;
  role: 0 | 1;
  avatar?: string;
}) {
  return (
    <div className="flex flex-row gap-2 px-4 border-l-2 self-center pl-3 pr-20 text-orange-950">
      <Avatar src={avatar} />
      <div>
        <p className="text-sm font-bold whitespace-nowrap">{name}</p>
        <p className="text-xs font-base">{roles[role]}</p>
      </div>
    </div>
  );
}
