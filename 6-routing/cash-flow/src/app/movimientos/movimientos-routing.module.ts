import { RouterModule, Routes } from '@angular/router';

/** Importación de los componentes enrutables */
import { EditorComponent } from './editor/editor.component';
import { ListaComponent } from './lista/lista.component';
import { MovimientosComponent } from './movimientos.component';
import { NgModule } from '@angular/core';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {
    path: 'movimientos',
    component: MovimientosComponent,
    children: [ // rutas hijas, se verán dentro del componente padre
      {
        path: 'nuevo', // la ruta real es movimientos/nuevo
        component: NuevoComponent
      },
      {
        path: 'lista',
        component: ListaComponent
      }
    ]
  },
  {
    path: 'movimientos/:id', // parámetro variable id
    component: EditorComponent
  }
];

export const routableComponents = [
  EditorComponent,
  NuevoComponent,
  ListaComponent,
  MovimientosComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MovimientosRoutingModule { }
