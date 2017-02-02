[Inyección de dependencias](http://academia-binaria.com/angular2-di-inyeccion-de-dependencias/)

Comunicación entre componentes mediante Servicios Inyectables con datos Observables

### Guía
- `ng g s movimientos/datos` :  crea el servicio de datos, pero ojo porque no lo engancha en el módulo
- `movimientos.module.ts` : registro manual del servicio como un proveedor
- `nuevo.component.ts` : declara dependencia de DatosService y delega responsabilidad
- `ng g class  movimientos/modelos/*` : modelos de datos creados como clases o interfaces
- `datos.service.ts` : servicio para manejo de datos comunes y observables
- `lista.component.ts` : declara dependencia de DatosService y se subscribe a sus cambios

(http://mean.expert/2016/05/21/angular-2-component-communication/)
