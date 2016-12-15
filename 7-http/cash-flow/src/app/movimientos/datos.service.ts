// Operador de transformación
import 'rxjs/add/operator/map';
//Operador para captura de errores
import 'rxjs/add/operator/catch';

// Importación directa de tipos
import { MaestroModel, MaestroTipoModel, Movimiento, MovimientoModel } from './datos.model';

import { Http } from '@angular/http';
import { HttpToolsService } from './../shared/http-tools.service';
import { Injectable } from '@angular/core';
// permite la suscripción a cambios de un stream
import { Observable } from 'rxjs/Observable';
// se comporta como un obseervable y además permite la emisión de datos hacia un observable
import { Subject } from 'rxjs/Subject';

/**
 * Programación reactiva con observables
 */


// decoración para marcarlo como inyectable
@Injectable()
export class DatosService {
  private urlBase: string = 'http://localhost:3030/api'
  private categorias: MaestroTipoModel[] = [];
  

  // Reclamar la dependencia sobre http  
  // Se ha registrado en el módulo raíz, se supone uso común a varios servicios
  constructor(private http: Http, private httpToolsService: HttpToolsService) {
  }


  getNuevoMovimiento(): MovimientoModel {
    let fechaActual:Date = new Date(Date.now());
    return new Movimiento(
      fechaActual,
      0,
      1,
      1
    );
  }


  // Se devuelven Observables de tipos concretos   
  getTipos(): Observable<MaestroModel[]> {
    // las llamadas devuelven observables
    // ocultan la definción de la ruta y demás
    return this.http
      .get(`${this.urlBase}/pub/maestros/tipos`)
      .map(this.httpToolsService.obtenerDatos)
  }

  // Se devuelven Observables de tipos concretos   
  getCategorias(): Observable<MaestroTipoModel[] > {
    // las llamadas devuelven observables
    // ocultan la definción de la ruta y demás
    return this.http
      .get(`${this.urlBase}/pub/maestros/categorias`)
      .map(this.httpToolsService.obtenerDatos)
      .map(categorias=>this.categorias=categorias)
  }

  getCategoriasPorTipo( tipo): MaestroTipoModel[] {
    return this.categorias.filter(c => c.type === tipo);
  }

  postMovimiento(movimiento: Movimiento) {
    /**
     * primero preparación de datos para su envío
     * después suscripción y operaciones sobre la respuesta
     */
    let body = JSON.stringify(movimiento)
    let options = this.httpToolsService.configurarCabeceras()
    console.log(body);
    if (movimiento._id && movimiento._id !=='_') {
      return this.http
        .put(`${this.urlBase}/priv/movimientos/${movimiento._id}`, body, options)
        .catch(this.httpToolsService.tratarErrores);
    }
    else {
      console.log('posting...');
      return this.http
        .post(`${this.urlBase}/priv/movimientos`, body, options);
        //.catch(this.httpToolsService.tratarErrores)
    }
  }

  getMovimientos$(): Observable<MovimientoModel[]> {
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/movimientos`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }  

  getMovimientoPor_Id$(_id) : Observable<MovimientoModel>{
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/movimientos/${_id}`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  // funciones auxiliares  
  getCategoriaBase = (tipoId) => this.getCategoriasPorTipo(tipoId)[0].id;
}