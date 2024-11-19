export default function ToggleSwitch({
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