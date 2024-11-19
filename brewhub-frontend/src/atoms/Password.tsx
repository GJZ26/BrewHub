import { useState } from "react";
import EyeOffIcon from "./EyeOffIcon";
import EyeIcon from "./EyeIcon";

export default function Password({ placeholder }: { placeholder: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        className="bg-amber-600 bg-opacity-10 p-2 border border-gray-300 rounded placeholder:font-normal outline-none focus:outline-none focus:ring-1 focus:ring-orange-200 text-xs mt-2 pr-10 w-full"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />

      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="
        absolute 
        inset-y-0 
        translate-y-1
        -translate-x-1
        right-2 
        flex 
        items-center 
        text-gray-400 
        focus:outline-none"
      >
        {showPassword ? (
          <EyeOffIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
