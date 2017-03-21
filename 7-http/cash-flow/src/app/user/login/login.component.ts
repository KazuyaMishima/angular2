import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Preguntar las credenciales al usuario
 * Verificar contra el servidor
 * */
export class LoginComponent implements OnInit {

  private credentials = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  alRegistrar() {
    this.userService.postUser$(this.credentials).subscribe();
  }

  alEntrar() {
    this.userService.postSesion$(this.credentials).subscribe();
  }

  showError(control) {
    return control.errors && (control.dirty || control.touched)
  }
}
