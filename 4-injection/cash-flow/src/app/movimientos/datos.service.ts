import { Categoria } from './modelos/categoria';
import { Injectable } from '@angular/core';
import { Movimiento } from './modelos/movimiento';
// permite la suscripción a cambios de un stream
import { Observable } from 'rxjs/Observable';
// se comporta como un observable y además permite la emisión de datos hacia un observable
import { Subject } from 'rxjs/Subject';
import { Tipo } from './modelos/tipo';

/**
 * Un servicio es una clase inyectable en otro servicio o componente
 */
@Injectable()
export class DatosService {
  /** Propiedad con el array para montar la lista de tipos de movimientos posibles */
  public tiposMovimiento: Tipo[] = [
    { id: 1, texto: 'Ingreso' },
    { id: 2, texto: 'Gasto' }];
  /**
   * Categorías, por tipo de movimiento
   */
  public categoriasTipoMovimiento: Categoria[] = [
    { id: 1, texto: 'Nómina', tipo: 1 },
    { id: 2, texto: 'Ventas', tipo: 1 },
    { id: 3, texto: 'Intereses', tipo: 1 },
    { id: 4, texto: 'Hipoteca', tipo: 2 },
    { id: 5, texto: 'Compras', tipo: 2 },
    { id: 6, texto: 'Domiciliaciones', tipo: 2 },
    { id: 7, texto: 'Impuestos', tipo: 2 }];
  /**
   * Base de datos de movimientos
   */
  private movimientos: Movimiento[] = [];

  /** Emisor de eventos relacionados con el almacén de movimientos */
  private movimientos$: Subject<Movimiento[]> = new Subject<Movimiento[]>();

  constructor() { }

  /** Crea un nuevo movimiento */
  getNuevoMovimiento(): Movimiento {
    return new Movimiento(
      new Date(),
      0,
      this.tiposMovimiento[0].id,
      this.categoriasTipoMovimiento[0].id
    );
  }

  /** Devuelve la lista de tipos de movimientos */
  getTiposMovimiento(): Tipo[] {
    return this.tiposMovimiento;
  }

  /** Devuelve la lista de categorias para un tipo concreto */
  getCategoriasPorTipo(tipo): Categoria[] {
    return this.categoriasTipoMovimiento.filter(c => c.tipo === tipo);
  }

  /** Guarda un movimiento en el almacén, y notifdica ese evento */
  postMovimiento(movimiento: Movimiento) {
    const movimientoClone: Movimiento = Object.assign({}, movimiento);
    this.movimientos.push(movimientoClone);
    console.log('al push' + JSON.stringify(this.movimientos));
    // genera un nuevo valor en el observable
    this.movimientos$.next(this.movimientos);
  }

  /** Devuelve un observable q  ue notifica cambios en el almacén de movimientos */
  getMovimientos$(): Observable<Movimiento[]> {
    // se comporta como un observable
    return this.movimientos$.asObservable();
  }
}
