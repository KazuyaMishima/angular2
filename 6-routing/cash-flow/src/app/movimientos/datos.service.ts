import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Categoria } from './modelos/categoria';
import { Injectable } from '@angular/core';
import { Movimiento } from './modelos/movimiento';
import { Observable } from 'rxjs/Observable';
import { Tipo } from './modelos/tipo';

// permite la suscripción a cambios de un stream

// se comporta como un observable y además permite la emisión de datos hacia un observable



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
  private movimientos$: BehaviorSubject<Movimiento[]> = new BehaviorSubject<Movimiento[]>(this.movimientos);

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
    movimientoClone._id = Date.now().toString();
    this.movimientos.push(movimientoClone);
    // genera un nuevo valor en el observable
    this.movimientos$.next(this.movimientos);
  }

  /** Devuelve un observable q  ue notifica cambios en el almacén de movimientos */
  getMovimientos$(): Observable<Movimiento[]> {
    // se comporta como un observable
    return this.movimientos$.asObservable();
  }

  /** Obtiene el movimiento para un identificador concreto */
  getMovimientoBy_Id(_id): Movimiento {
    return this.movimientos.find(m => m._id === _id);
  }
}
