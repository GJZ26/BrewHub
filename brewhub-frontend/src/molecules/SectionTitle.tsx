import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import NotificationButton from "./NotificationButton";

export default function SectionTitle() {
  return (
    <div className="flex flex-row justify-between w-full align-middle px-4 text-orange-950">
      <div>
        <Paragraph>Catálogo de usuarios</Paragraph>
        <Title>Usuarios</Title>
      </div>
      <NotificationButton />
    </div>
  );
}
