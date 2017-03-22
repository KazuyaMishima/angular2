import { CrudService } from './../shared/crud.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from './../shared/model/data.class';
import { UserStoreService } from './../shared/user-store.service';

@Injectable()
/**
 * CRUD con lógica específica apara usuarios y sesiones
 * */
export class UserService extends CrudService {

  constructor(private userStoreService: UserStoreService, http: Http, private router: Router) {
    super(http);
    this.apiEndPoint = 'pub/usuarios';
  }

  /**
   * Enviar credenciales y guardar token
   * */
  public postSesion$(credenciales) {
    return this.http
      .post('pub/sesiones', credenciales)
      .map(r => {
        const token = r.json();
        this.userStoreService.logIn({ email: credenciales.email }, token);
        this.router.navigate(['']);
      });
  }

  /**
   * Enviar credenciales y guardar token
   * */
  public postUser$(credenciales) {
    return this.http
      .post('pub/usuarios', credenciales)
      .map(r => {
        const token = r.json();
        this.userStoreService.logIn({ email: credenciales.email }, token);
        this.router.navigate(['']);
        return token;
      });
  }

  /**
   * Obtener el usuario actual
   * */
  public getProfile(): UserData {
    return this.userStoreService.getProfile();
  }

}
