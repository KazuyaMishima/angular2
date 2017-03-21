import { UserRoutingModule, routableComponents } from './user-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    routableComponents
  ],
  providers: [
    UserService
  ]
})
/**
 * Modulo para componentes y servicios de gestión de usuarios
 */
export class UserModule { }
