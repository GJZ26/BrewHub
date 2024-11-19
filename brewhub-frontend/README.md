# Guía de instalación: Front-end (React + Vite)

El cliente del sistema utiliza React con Vite como empaquetador. Sigue los pasos a continuación para configurarlo.

---

#### Requisitos

Asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- **Node.js** v20 o superior
- **npm** v10 o superior

---

#### Pasos de instalación

1. **Clonar el repositorio**  
   Abre una terminal y clona el proyecto:

   ```bash
   git clone https://github.com/GJZ26/BrewHub.git
   cd BrewHub/brewhub-frontend
   ```

2. **Instalar dependencias**  
   Usa `npm` para instalar todas las dependencias necesarias:

   ```bash
   npm install
   ```

3. **Configurar el host de la API**  
    Por defecto, la aplicación siempre apunta a http://localhost:8000, pero puede ser configurada en el archivo `src/shared/config/app.config.ts`

   ```typescript
   export const config = {
     api_protocol: "http",
     api_host: "localhost",
     api_port: "8000",
   };
   ```

4. **Iniciar el servidor de desarrollo**  
   Ejecuta el siguiente comando para iniciar la aplicación:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000) por defecto.

   Puedes cambiar el puerto de ejecución desde el archivo `vite.config.ts`, pero implica agregar ese origen al archivo de cors de php en el archivo `.env` o desde `brewhub-backend\config\cors.php`

---
