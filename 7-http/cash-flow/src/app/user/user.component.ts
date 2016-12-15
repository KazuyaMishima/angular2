import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

      usuario={};//:any = { email:'', password:''}
    mensaje = "";
    constructor(private seguridadService: UserService){
    }

    ngOnInit(){
    }

    registrarUsuario(){
        console.log('Enviando credenciales apara registro: ' + JSON.stringify(this.usuario));
        this.seguridadService
            .registrar(this.usuario)
            .subscribe(
                r=>{
                    console.log(r);
                }, 
                e=>{
                    this.mostrarError(e);
                })
    }

    entrarUsuario(){
        console.log('Enviando credenciales para entrada: ' + JSON.stringify(this.usuario));
        this.mensaje="validando...";
        this.seguridadService
            .entrar(this.usuario)
            .subscribe(
                r=>{
                    console.log(r);
                }, 
                e=>{
                    this.mostrarError(e);
                })
    }

    mostrarError(e){
        this.mensaje="ERROR";
        console.error(e);
    }

}
