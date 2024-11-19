export default function Input({
  type,
  placeholder,
  defaultValue,
}: {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  defaultValue: string | number | readonly string[];
}) {
  return (
    <input
      className="bg-amber-600 bg-opacity-10 p-2 border border-gray-300 roundedbg-orange-100 rounded placeholder:font-normal outline-none focus:outline-none focus:ring-1 focus:ring-orange-200 border-none text-xs mt-2"
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    ></input>
  );
}
