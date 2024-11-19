# Guía de instalación: Back-end (Laravel)

Este proyecto utiliza Laravel para implementar la API del sistema. Sigue los pasos a continuación para configurar el back-end correctamente.

---

#### Requisitos
Asegúrate de tener instaladas las siguientes herramientas en tu sistema:
- **PHP** v8.2.x o superior
- **Composer** 2.6.x o superior
- **MySQL**

---

#### Pasos de instalación

1. **Clonar el repositorio**  
   Abre una terminal y clona el proyecto:
   ```bash
   git clone https://github.com/GJZ26/BrewHub.git
   cd BrewHub/brewhub-backend
   ```

2. **Instalar dependencias**  
   Ejecuta Composer para instalar todas las dependencias del proyecto:
   ```bash
   composer install
   ```

3. **Configurar el archivo de entorno**  
   Copia el archivo `.env.example` a `.env` y actualiza las variables necesarias:
   ```bash
   cp .env.example .env
   ```
   Configura los siguientes campos en el archivo `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=nombre_de_tu_base_de_datos
   DB_USERNAME=usuario
   DB_PASSWORD=contraseña
   ```

4. **Generar la clave de la aplicación**  
   Ejecuta el siguiente comando para generar una clave única:
   ```bash
   php artisan key:generate
   ```

5. **Ejecutar las migraciones**  
   Crea las tablas necesarias en la base de datos y añade los primeros registros a la base de datos:
   ```bash
   php artisan migrate --seed
   ```

6. **Iniciar el servidor local**  
   Para probar el back-end, inicia el servidor:
   ```bash
   php artisan serve
   ```
   El servidor estará disponible en [http://127.0.0.1:8000](http://127.0.0.1:8000).
