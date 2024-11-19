import { ReactNode, useEffect, useState } from "react";
import DashboardTemplate from "../templates/DashboardTemplate";
import useUserContext from "../shared/hook/useUserContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ children }: { children: ReactNode }) {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (user == null) {
      navigate("/");
    } else {
      setIsChecking(false);
    }
  }, [user, navigate]);

  if (isChecking) {
    return null;
  }

  return <DashboardTemplate children={children} />;
}
