// importación de funciones Rx una a una
import 'rxjs/add/observable/throw'

import { Headers, Http, RequestOptions, Response } from '@angular/http';

// clase con métoddos de ayuda para utilizar en los demás servicios
import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { Router } from '@angular/router'

@Injectable()
export class HttpToolsService {

  private static _router: Router
  private static _token: any
  
  constructor(private router: Router ) {
    HttpToolsService._router=this.router
  }
  // puesto que los envíos requieren siempre la misma configuración
  configurarCabeceras() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sessionId': HttpToolsService._token
    })
    // llamar a este método en cada llamda, equivale a los interceptores de Angular1
    let options = new RequestOptions({ headers: headers })
    return options
  }
  // para extraer los datos json de la respuesta http 
  obtenerDatos(response) { 
      // TODO: validar el satusCode y controlar vacíos
      return response.json() 
    }
  
  // tratar errores de comunicación
  tratarErrores(error) {
    console.log(JSON.stringify(error));
    if (error.status == 401) {
      console.log("Error de permisos");
      HttpToolsService._router.navigate(['seguridad'])
    }
    else {
      console.log("Otro Error");
    }
    return Observable.throw(error._body)
  } 

  // despues de obtener credenciales  
  guardarCredenciales(token) {
    // guardar credenciales
    console.log('Guardando token: ' + token);
    HttpToolsService._token = token
    // ir a la página principal
    HttpToolsService._router.navigate([''])
    return token
  }
}
