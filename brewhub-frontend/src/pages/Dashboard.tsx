import { ReactNode } from "react";
import DashboardTemplate from "../templates/DashboardTemplate";

export default function Dashboard({ children }: { children: ReactNode }) {
  return <DashboardTemplate children={children} />;
}
