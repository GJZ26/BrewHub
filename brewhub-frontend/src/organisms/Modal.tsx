import Button from "../atoms/Buttons";
import Title from "../atoms/Title";
import FormCheckbox from "../molecules/FormCheckbox";
import FormInput from "../molecules/FormInput";

export default function Modal({
  isActive,
  setIsActive,
  user,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  user?: any;
}) {
  return (
    <>
      {isActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsActive(false)} // Cierra el modal al hacer clic fuera del contenido
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
          >
            {/* Título */}
            <Title>Registrar Usuario</Title>

            {/* Formulario */}
            <form className="space-y-4">
              <FormInput
                label="Nombre"
                type="text"
                placeholder="Nombre completo"
                defaultValue={user.name ?? ""}
              />
              <FormInput
                label="Correo Electrónico"
                type="email"
                placeholder="jhon_doe@test.com"
                defaultValue={user.email ?? ""}
              />
              <FormInput
                label="Contraseña"
                type="password"
                placeholder="Escriba su contraseña"
              />
              <FormCheckbox text="Activar usuario" defaultChecked={user.isActive} />
              {/* Botones */}
              <div className="flex justify-end gap-2">
                <Button>Cancelar</Button>
                <Button>Guardar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
