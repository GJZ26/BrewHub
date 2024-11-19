import { useEffect, useState } from "react";
import Button from "../atoms/forms/Buttons";
import Title from "../atoms/display/Title";
import FormCheckbox from "../molecules/FormCheckbox";
import FormInput from "../molecules/FormInput";
import UserAttribute from "../shared/interface/UserAttributes";
import UserModifiable from "../shared/interface/UserModifiables";

export default function Modal({
  isActive,
  setIsActive,
  user,
  onSubmit,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  user?: UserAttribute | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, user: UserModifiable) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserActive, setIsUserActive] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.name ?? "");
      setEmail(user.email ?? "");
      setIsUserActive(user.isActive ?? true);
    }
  }, []);

  function cancelHandler(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault();
    setIsActive(false);
  }

  return (
    <>
      {isActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
          >
            <Title>Registrar Usuario</Title>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data: UserModifiable = {
                  name: name,
                  email: email,
                  isActive: isUserActive,
                  role: 0,
                };
                if (password) {
                  data.password = password;
                }
                onSubmit(e, data);
                if (!user) {
                  setName("");
                  setEmail("");
                  setPassword("");
                  setIsUserActive(false);
                }
                setIsActive(false);
              }}
            >
              <FormInput
                label="Nombre"
                type="text"
                placeholder="Nombre completo"
                defaultValue={name}
                onInput={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <FormInput
                label="Correo Electrónico"
                type="email"
                placeholder="jhon_doe@test.com"
                defaultValue={email}
                onInput={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
              <FormInput
                label="Contraseña"
                type="password"
                placeholder="Escriba su contraseña"
                defaultValue={password}
                onInput={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                required={false}
              />

              <FormCheckbox
                text="Activar usuario"
                defaultChecked={isActive}
                onInput={(e) => {
                  setIsUserActive((e.currentTarget as any).checked);
                }}
              />

              <div className="flex justify-end gap-2">
                <Button onClick={cancelHandler}>Cancelar</Button>
                <Button submit>Guardar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
