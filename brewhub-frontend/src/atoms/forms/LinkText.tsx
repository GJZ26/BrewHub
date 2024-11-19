import { Link } from "react-router-dom";

export default function LinkText({ text, to }: { text: string; to: string }) {
  return (
    <Link
      className="text-xs text-orange-500 font-normal hover:text-orange-600 transition-colors"
      to={to}
    >
      {text}
    </Link>
  );
}
