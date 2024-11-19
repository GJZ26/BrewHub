import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UserTemplate from "./templates/UsersTemplate";
import { UserContextProvider } from "./shared/context/UserContext";

export default function Router() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={<Dashboard children={<UserTemplate />} />}
          />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}
