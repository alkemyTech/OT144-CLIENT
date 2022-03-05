# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Skeleton Componente

Componente para dar feedback al usuario cuando se esté realizando la carga de contenido.

El componente Skeleton espera recibir por props un objeto con tres propiedades "width", "heigth" y "radius" cuyos valores deben ser iguales a las del contenido que se desea reemplazar.

Valores para radius en cada caso de contenido a reemplazar:
 .-Texto: se recomienda no pasar ningun valor
 .-Avatar: utilizar el valor 50%
 .-Título: utilizar el valor 5px

Forma de uso:

    const sizeSkeleton = { width: '150px', height: '150px', radius: '50%' }

    {loading ? 
    <Skeleton skeletonSize={sizeSkeleton}/>
    :
    <img src={data.img} alt="img"></img>
    }

### Running Spinner
Each loader has their own default properties. You can overwrite the defaults by passing props.

default properties:
(color: "#2c8ef7",
  loading: false,
  size: 50)

Each loader accepts a loading prop as a boolean. The loader will render null if loading is false.
(const [loading, setLoading] = useState(false))
