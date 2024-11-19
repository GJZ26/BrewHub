import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UserTemplate from "./templates/UsersTemplate";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<Dashboard children={<UserTemplate />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
