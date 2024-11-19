import { useState } from "react";

export default function Modal() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsActive(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Registrar Usuario
      </button>

      {/* Modal */}
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
            <h2 className="text-2xl font-bold mb-4">Registrar Usuario</h2>
            
            {/* Formulario */}
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nombre completo"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ejemplo@email.com"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Contraseña</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="block font-semibold">¿Activar usuario?</label>
                <input
                  type="checkbox"
                  className="w-5 h-5"
                />
              </div>
              {/* Botones */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsActive(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
