[Módulos y Componentes](http://academia-binaria.com/componentes-los-bloques-de-construccion-de-angular-2/)
[Data Binding](http://academia-binaria.com/databinding-el-flujo-de-datos-de-angular2/)

Módulos de funcionalidad con Angular 2

### Guía
- `ng g m movimientos` : crea el módulo movimientos en su carpeta 
- `movimientos` : carpeta para el módulo movimientos
- `movimientos.module.ts` : un módulo de funcionalidad
- `ng g c movimientos/movimientos` : Creación del componente principal del módulo
- `movimientos.component.ts` : componente principal del módulo, con el prefijo app
- `movimientos.component.html` : vista del componente movimientos
- `app.module.ts` : importación del módulo de movimientos
- `app.component.html` : incorporamos al componente movimientos
- `ng g c movimientos/nuevo` : crea una carpeta con el componente nuevo dentro del modulo movimientos
- `movimientos.component.html` : incorporamos el componente nuevo como un elemento
- `nuevo.component.html` : directivas para enlace de datos

app > módulos > componentes
módulos: agrupaciones lógicas de componentes y otras cosas
componentes: resuelven funcionalidades visualmente = plantilla(html) + clase(ts)


Módulos (países)
  que importan de otros países
  construyen (declaran) bienes
  algunos de esos los exportan
Otros módulos (paises) importan lo que los anteriores exportan


(https://scotch.io/tutorials/how-to-deal-with-different-form-controls-in-angular-2)
