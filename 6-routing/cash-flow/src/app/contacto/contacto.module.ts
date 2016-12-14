import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';

@NgModule({
  imports: [
    CommonModule,
    ContactoRoutingModule
  ],
  declarations: [ContactoComponent]
})
export class ContactoModule { }
