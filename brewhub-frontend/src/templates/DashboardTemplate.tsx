import SideNavigation from "../organisms/SideNavigation";
import ViewHeader from "../organisms/ViewHeader";
export default function DashboardTemplate() {
  return (
    <div className="flex min-h-screen min-w-full">
      <SideNavigation className="w-2/12" />
      <main className="w-10/12">
        <ViewHeader />
      </main>
    </div>
  );
}
