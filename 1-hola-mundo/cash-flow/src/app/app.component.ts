import { Component } from '@angular/core';

// Es una función que actúa como decorador
// Es la forma que tiene TypeScript de agregar Metadata al código
@Component({
  selector: 'cf-root', // determina el nombre que será conocido en html
  templateUrl: './app.component.html', // ruta relativa a la plantilla con la vista 
  styles: [] // Aqui irán los estilos directamente, o las rutas hacia ficheros css...
})
export class AppComponent {
  // Propiedades del componente, visibles desde la plantilla
  title = 'Hola Mundo del Cash-Flow con Angular!';
}
