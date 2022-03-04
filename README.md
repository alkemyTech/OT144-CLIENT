<div align="center">
  <h1>Proyecto SOMOS MÁS - ONG (React-Grupo144)</h1>
  <img width="300px" src="https://raw.githubusercontent.com/alkemyTech/OT144-CLIENT/main/public/images/SomosMas.png"/>
 </div>

Este proyecto está desarrollado bajo las siguientes principales tecnologías:
- React
- Redux
- Axios
- Formik
- CKEditor 5

## 📥Instalación y Ejecución
Para correr el proyecto es necesario clonarlo de la siguiente manera.
```sh
git https://github.com/alkemyTech/OT144-CLIENT.git
cd OT144-CLIENT
npm install
```
También se necesita el archivo de variables de entorno, similar al ejemplo de [.env.example](https://github.com/alkemyTech/OT144-CLIENT/blob/master/.env.example), luego se podrá iniciar el proyecto con el siguiente comando:
```sh
npm run start
```

## SetUP de componentes y servicios
### Alerts
Para las alertas se utilizó la librería [sweetalert2](https://www.npmjs.com/package/sweetalert2), existen dos componentes de alerta que se pueden usar, a continuación ejemplos de implementación:
#### BasicAlert.js
Este tipo de alerta se utiliza para dar un feedback rápido al usuario, recibe 4 propiedades
+ type (String) puede ser success, error, warning, info o question
+ title (String)
+ text (String)
+ timer (Number) será el tiempo que tardará en cerrarse automáticamente la alerta.
```js
import BasicAlert from "../UI/Alerts/BasicAlert";
BasicAlert("success", "Título de la alerta", "Texto de la alerta", 1500)
```
#### ConfirmAlert.js
Este tipo de alerta se utiliza en el caso de que se requiera una confirmación positiva o negativa del usuario. El uso de esta alerta retornará un resultado de forma asíncrona, por lo que es importante usarla desde una función del mismo tipo para esperar su resultado.
+ type (String) puede ser success, error, warning, info o question
+ title (String)
+ text (String)
+ confirmButtonText (String) es el texto que irá dentro del botón de la acción de confirmar
+ cancelButtonText (String) es el texto que irá dentro del botón de la acción de cancelar

El resultado que se retorna de ConfirmAlert puede ser isConfirmed, isDenied o isDismissed, lea más en la [Documentación Oficial](https://sweetalert2.github.io/#handling-buttons)
```js
import BasicAlert from "../UI/Alerts/BasicAlert";
import ConfirmAlert from "../UI/Alerts/ConfirmAlert";

const funcionAsincrona = async () => {
    const result = await ConfirmAlert(
      "warning",
      "Título de la alerta de confirmación",
      "Texto de la alerta de confirmación",
      "Sí",
      "No"
    );
    if (result.isConfirmed) {
      BasicAlert(
        "success",
        "Título de la alerta success",
        "Text de la alerta success"
      );
    } else {
      BasicAlert(
        "error",
        "Título de la alerta error",
        "Text de la alerta error"
      );
    }
  };
```
