import { useNavigate } from "react-router-dom";
import useUserContext from "../shared/hook/useUserContext";
import LoginTemplate from "../templates/LoginTemplate";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    } else {
      setIsChecking(false);
    }
  }, [user, navigate]);

  if (isChecking) {
    return null;
  }

  return <LoginTemplate />;
}
