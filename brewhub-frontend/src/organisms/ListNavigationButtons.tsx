import DashboardIcon from "../atoms/icons/DashboardIcon";
import InvenotryIcon from "../atoms/icons/InventoryIcon";
import ProductsIcon from "../atoms/icons/ProductsIcon";
import SalesIcon from "../atoms/icons/SalesIcon";
import UsersIcon from "../atoms/icons/UsersIcon";
import NavigationButton from "../molecules/NavigationButton";

export default function ListNavigationButtons() {
  return (
    <div className="px-3">
      <NavigationButton
        to="/resume"
        icon={<DashboardIcon />}
        text="Dashboard"
        disabled={true}
      />

      <NavigationButton
        to="/dashboard"
        icon={<UsersIcon />}
        text="Usuarios"
        disabled={false}
      />

      <NavigationButton
        to="/products"
        icon={<ProductsIcon />}
        text="Productos"
        disabled={true}
      />

      <NavigationButton
        to="/sales"
        icon={<SalesIcon />}
        text="Ventas"
        disabled={true}
      />

      <NavigationButton
        to="/inventory"
        icon={<InvenotryIcon />}
        text="Inventarios"
        disabled={true}
      />
    </div>
  );
}
