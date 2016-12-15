import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './contacto.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactoRoutingModule { }
