# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 # Weather App - Búsqueda de Clima por Ciudad
- Una aplicación web que permite a los usuarios buscar el clima de cualquier ciudad, obtener la información meteorológica actual y agregar sus ciudades favoritas a una lista.

# Descripción
- Esta aplicación interactúa con la API de OpenWeather para obtener información sobre el clima de cualquier ciudad y permite a los usuarios guardar las ciudades favoritas en su contexto para tener acceso rápido a ellas.

# Funcionalidades
- Buscar el clima de cualquier ciudad utilizando la API de OpenWeather.
- Mostrar la información climática de la ciudad, como temperatura, humedad y condiciones del tiempo.
- Guardar ciudades favoritas para acceder rápidamente a su clima.
- Notificaciones de error si la ciudad no se encuentra o si ocurre un problema con la solicitud.

# Tecnologías Usadas
- React: Para la creación de la interfaz de usuario.
- Redux: Para el manejo de estado global.
- Axios: Para realizar las solicitudes HTTP a la API de OpenWeather.
- Material-UI: Para los componentes de interfaz como alertas y notificaciones.
- React Context: Para gestionar el estado de las ciudades favoritas.
- OpenWeather API: Para obtener la información meteorológica.

# Estructura del Proyecto

src/
├── components/
│   ├── WeatherPaper.jsx       # Componente para mostrar el clima.
│   ├── Notification.jsx       # Componente para mostrar notificaciones de error.
│   ├── Favorites.jsx          # Componente para mostrar las ciudades guardadas como favoritas.
├── locale/
│   ├── es.jsx                 # Textos en español de la aplicación.
├── context/
│   ├── FavoritesContext.jsx   # Contexto para manejar las ciudades favoritas.
├── resources/
│   ├── ApiUrls.jsx            # URL base y rutas de la API de OpenWeather.
│   ├── useCustomTheme.jsx     # Paleta de colores usada por MUI.
├── services/
│   ├── WeatherService.js     # Servicio para interactuar con la API de OpenWeather.
├── pages/
│   ├── Home.jsx              # Página donde se muestra la aplicación.
├── store/
│   ├── weatherSlice.js       # Reducer para manejar el estado del clima.
│   ├── notificationSlice.js  # Reducer para manejar las notificaciones.
├── utils/
│   ├── MyAxiosInstance.js    # Instancia personalizada de Axios para la API.
├── App.js                    # Componente principal de la aplicación.

# Instalación
- Clona el repositorio en tu máquina local:

git clone https://github.com/Helenagg/weather-forecast

- Navega al directorio del proyecto:

cd weather-forecast

- Instala las dependencias:

npm install

- Inicia la aplicación:

npm run dev

# Uso
- Buscar Clima
- Ingresa el nombre de una ciudad en el campo de búsqueda y presiona enter.
- Se mostrará la información del clima actual, como temperatura, humedad, y las condiciones meteorológicas.

# Guardar Favoritos
Puedes agregar ciudades a tus favoritos haciendo clic en el ícono de "favorito" junto al nombre de la ciudad.
Las ciudades favoritas se guardan en el contexto y se mantienen disponibles para consultas futuras.

# Notificaciones de Error
Si la ciudad no se encuentra o si ocurre un error con la solicitud, se mostrará una notificación en la parte inferior derecha de la pantalla.

# API de OpenWeather
La aplicación hace uso de la API de OpenWeather para obtener la información meteorológica. Puedes obtener tu propia clave API registrándote en su sitio web.

URL base: https://api.openweathermap.org/data/2.5

# Endpoints:
Obtener el clima de una ciudad: weather?q={cityName}&appid={apiKey}&units={unit}&lang=es

# Archivos Clave
- ApiUrls.js: Contiene las rutas necesarias para interactuar con la API de OpenWeather.
- MyAxiosInstance.js: Configuración personalizada de Axios para realizar solicitudes a la API.
- weatherSlice.js: Maneja el estado de la respuesta de la API, incluyendo el manejo de errores y la carga de datos.
- FavoritesContext.js: Contexto para manejar las ciudades favoritas.



