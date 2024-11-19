import { FormEvent } from "react";
import Button from "../atoms/Buttons";
import LinkText from "../atoms/LinkText";
import { Logo } from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import FormCheckbox from "../molecules/FormCheckbox";
import FormInput from "../molecules/FormInput";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <form
      className="w-90 ml-20 bg-slate-50 p-6 rounded absolute left-0 top-1/2 transform -translate-y-1/2"
      onSubmit={submitHandler}
    >
      <Logo className="mx-auto w-24" version="color" />
      <Title>Bienvenido a BrewHub</Title>

      <Paragraph>
        Ingresa tu correo y tu contraseña para iniciar sesión.
      </Paragraph>

      <div className="mt-6">
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
      </div>

      <div className="flex justify-between mb-3 mt-5">
        <FormCheckbox text="Recuérdame" defaultChecked={true} />
        <LinkText to="/reset-password" text="¿Olvidaste tu contraseña?" />
      </div>

      <Button>Iniciar Sesión</Button>
    </form>
  );
}
