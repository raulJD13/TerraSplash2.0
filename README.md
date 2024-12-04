# APP VERSION 2
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Flujo de Trabajo con Git en Dos Ordenadores

Este proyecto se trabaja en dos ordenadores (por ejemplo, uno en clase y otro en casa). Sigue estos pasos para mantener el repositorio sincronizado en ambos equipos sin necesidad de clonar cada vez.

### 1. Primera vez en cada ordenador
   - En el ordenador de clase, ya deberías tener el proyecto.
   - En el ordenador de casa, realiza un `git clone` del repositorio la primera vez que trabajes en él:
     ```bash
     git clone https://github.com/usuario/nombre-del-repositorio.git
     ```

### 2. Antes de empezar a trabajar (en cualquiera de los dos ordenadores)
   - Asegúrate de tener la última versión del proyecto desde GitHub ejecutando:
     ```bash
     git pull origin main
     ```

### 3. Durante el trabajo
   - Realiza tus cambios en el proyecto como de costumbre (añade o edita archivos, realiza pruebas, etc.).

### 4. Al terminar de trabajar
   - Guarda y sube los cambios a GitHub para que estén disponibles en el otro ordenador:
     ```bash
     git add .  # Añade todos los cambios
     git commit -m "Describe los cambios realizados"  # Guarda los cambios en un commit
     git push origin main  # Sube los cambios a GitHub
     ```

### 5. Al cambiar de ordenador
   - Cuando vayas a trabajar en el otro ordenador (de clase a casa o de casa a clase), asegúrate de hacer un `git pull` para traer los últimos cambios:
     ```bash
     git pull origin main
     ```
### Instalar json-server en el sistema
   - npm install -g json-server
   
### Importante para activar servidor json
   - json-server --watch Ruta/users.json --port 3001
   - json-server --watch C:/Users/jimen/OneDrive/Escritorio/Development/DAD/terrasplash/TerraSplash2.0/src/data/users.json --port 3001
   - json-server --watch /Users/rauljimenez/Development/DAD/React-Projects/TerraSplash2.0/terrasplash/src/data/users.json --port 3001


### Notas Importantes
- **Evita trabajar en ambos ordenadores al mismo tiempo sin hacer `push` o `pull`** antes de cambiar, para evitar conflictos.
- **Manejo de Conflictos**: Si Git muestra un conflicto al hacer `pull`, revisa los archivos afectados y resuelve los cambios para continuar.

Siguiendo este flujo de trabajo, podrás mantener el proyecto sincronizado en ambos equipos sin problemas.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# TerraSplash2.0
