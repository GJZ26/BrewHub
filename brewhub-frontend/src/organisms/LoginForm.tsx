import { FormEvent, useState } from "react";
import Button from "../atoms/forms/Buttons";
import LinkText from "../atoms/forms/LinkText";
import { Logo } from "../atoms/media/Logo";
import Paragraph from "../atoms/display/Paragraph";
import Title from "../atoms/display/Title";
import FormCheckbox from "../molecules/FormCheckbox";
import FormInput from "../molecules/FormInput";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { request, requestCSFR } from "../shared/HTTP/Request";
import { authenticatedUser } from "../shared/context/UserContext";
import useUserContext from "../shared/hook/useUserContext";
import Notifier from "../atoms/display/Notifier";

export default function LoginForm() {
  const navigate = useNavigate();
  const { saveUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledInputs, setDisabledInputs] = useState(false);

  function accessRequest() {
    request
      .post("/api/auth/login", { email, password })
      .then((response) => {
        const user = response.data.user;
        const currentUser: authenticatedUser = {
          createdAt: user.createdAt,
          email: user.email,
          id: user.id,
          isActive: user.isActive,
          name: user.name,
          role: user.role,
          token: response.data.token,
          expireAt: response.data.expireAt
        };
        saveUser(currentUser);
        navigate("/dashboard");
      })
      .catch((requestError) => {
        if (requestError.response.status < 500) {
          toast.error(requestError.response.data.message);
        } else {
          toast.error(
            "Ha ocurrido un error durante tu autenticación.\nInténtelo más tarde."
          );
        }
      });
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    setDisabledInputs(true);

    requestCSFR()
      .then(accessRequest)
      .catch((CSFRError) => {
        toast.error("Ha ocurrido un error.\nInténtelo más tarde.");
        console.error(CSFRError);
      })
      .finally(() => {
        setDisabledInputs(false);
      });
  }

  return (
    <>
      <Notifier />
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
            onInput={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />

          <FormInput
            type="password"
            placeholder="Escribe tu contraseña"
            label="Contraseña"
            onInput={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>

        <div className="flex justify-between mb-3 mt-5">
          <FormCheckbox text="Recuérdame" defaultChecked={true} />
          <LinkText to="/" text="¿Olvidaste tu contraseña?" />
        </div>

        <Button submit disabled={disabledInputs}>
          Iniciar Sesión
        </Button>
      </form>
    </>
  );
}
