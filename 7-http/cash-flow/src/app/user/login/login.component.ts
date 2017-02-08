import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Ask user for credentials
 * Send to a service and logs in the user
 * */
export class LoginComponent implements OnInit {
  /**
   * Some questions to indentify the user
   */
  private credentials = {
    email: '',
    password: ''
  };
  /**
   * Parameters for translations and custom validations
   */
  private passwordValidation = { minlength : 4 };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  /**
   * the user clicks the register in button
   */
  alRegistrar() {
    this.userService.postUser(this.credentials);
  }
  /**
   * the user clicks the log in button
   */
  alEntrar() {
    this.userService.postSesion(this.credentials);
  }

  showError(control) {
    return control.errors && (control.dirty || control.touched)
  }
}
