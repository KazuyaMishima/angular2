[http](http://academia-binaria.com/comunicaciones-http-observables-con-angular2/)

Servidor de datos y consumo desde el cliente

### Guía
#### server
- `/api-flow` :  Carpeta para el servidor
- `package.json` : Dependencias 
- `index.js` : Arranque de la aplicación
- `middleware.js` : configuración de la aplicación express
- `/api`: carpeta con los rutas
- `mongodb.js` : utilidad para acceder a mongodb
- `/seguridad`: carpeta con utilidades para el control de acceso al api
#### client
- `http-tools.service.ts`: funciones de ayuda para las comnicaciones
- `datos.service.ts`: obtención de datos desde el api
- `movimientos*.component.ts`: consumo de observables en lugar de datos directos
- `/user` : módulo con un componente y un servicio para manejar usuarios
()
