import Button from "../atoms/Buttons";
import LinkText from "../atoms/LinkText";
import { Logo } from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import FormCheckbox from "../molecules/FormCheckbox";
import FormInput from "../molecules/FormInput";

export default function LoginForm() {
  return (
    <form className="w-90 ml-20 bg-slate-50 p-6 rounded absolute left-0 top-1/2 transform -translate-y-1/2">
      <Logo />
      <Title>Bienvenido a BrewHub</Title>

      <Paragraph>
        Ingresa tu correo y tu contraseña para iniciar sesión.
      </Paragraph>

      <FormInput
        type="email"
        placeholder="Escribe tu correo electrónico"
        label="Correo electrónico"
      />

      <FormInput
        type="password"
        placeholder="Escribe tu contraseña"
        label="Contraseña"
      />

      <div className="flex justify-between mb-8 mt-3">
        <FormCheckbox text="Recuérdame" defaultChecked={true} />
        <LinkText to="/reset-password" text="¿Olvidaste tu contraseña?" />
      </div>

      <Button>Iniciar Sesión</Button>
    </form>
  );
}
