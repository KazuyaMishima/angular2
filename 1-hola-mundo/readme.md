[Angular2 la evolución de la plataforma](https://docs.google.com/presentation/d/1VyMGTwiM7HmNMdSCXrrYpHIej-Y8ZwZKCan7KMqvdCA/edit#slide=id.p)
[Hola Mundo en Angular 2](http://academia-binaria.com/hola-mundo-en-angular-2/)


## Guía
```
ng new cash-flow --p cf --sg 
```

- `src\index.html` : Página raíz que contiene al componente raíz `<cf-root>`
- `src\main.ts` : Fichero de arranque de la aplicación que configura y carga el módulo ráiz `AppModule`.
- `src\app\app.module.ts` : Declaración del módulo raíz y sus dependencias. Exponen al `AppComponent` para el *bootstraping* de la aplicación
- `src\app\app.component.ts` : Componente raíz `cf-root`

## CLI

- `.angular-cli.json` : Configuracíon del CLI
- `package.json` : Dependencias y scripts 
- `tslint.json` : Reglas para código limpio
- `.editorconfig` : Configuración para el editor

```
ng new cash-flow --p cf --is true --sg 
ng build
ng build --prod
ng serve -o 
ng test --single-run
```

### ng options
[Documentación](https://github.com/angular/angular-cli/tree/master/docs/documentation)
