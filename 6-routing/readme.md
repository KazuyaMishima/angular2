[Routing](http://academia-binaria.com/enrutado-con-angular2-el-nuevo-spa/)
Enrutado modular 

### Guía
- `app-routing.module.ts` : ng new cash-flow --routing true
- `app.module.ts` : import { AppRoutingModule } from './app-routing.module';
- `app.component.html` :  outer-outlet y routerLink principales
- `movimientos-routing.module.ts` : Enrutado para el módulo movimientos 
- `movimientos.module.ts` : el módulo movimientos importa a us enrutador
- `movimientos.component.html` : outer-outlet y routerLink para movimientos
- `lista.component.html` :  routerLink con parámetros
- `editor.component.ts` : recepción de router.params.subscribe()


()

ng new cash-flow --routing true
ng g m home --routing true
no se necesitan @input ni observables
