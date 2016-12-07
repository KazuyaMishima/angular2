import { EditorComponent } from './editor/editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimientosComponent } from './movimientos.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {
    path: 'movimientos',
    component: MovimientosComponent,
    children: [
      {
        path: 'nuevo',
        component: NuevoComponent
      },
      {
        path: 'lista',
        component: ListaComponent
      }
    ]
  },
  {
    path: 'movimientos/:id',
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
