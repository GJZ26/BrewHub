import { ReactNode } from "react";
import SideNavigation from "../organisms/SideNavigation";
import ViewHeader from "../organisms/ViewHeader";

export default function DashboardTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen min-w-full">
      <SideNavigation className="w-2/12 fixed top-0 left-0 h-full" />
      
      <div className="w-10/12 ml-[16.666667%] h-screen overflow-y-auto">
        <ViewHeader />
        {children}
      </div>
    </div>
  );
}
