import { CommonModule } from '@angular/common';
import { HttpToolsService } from './http-tools.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [HttpToolsService]
})
export class SharedModule { }
