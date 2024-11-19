export default function Checkbox({
  defaultChecked,
}: {
  defaultChecked: boolean;
}) {
  return (
    <input
      type="checkbox"
      className="peer border-2 border-gray-300 rounded-sm focus:ring-2 accent-orange-700 mr-3"
      defaultChecked={defaultChecked}
    />
  );
}
