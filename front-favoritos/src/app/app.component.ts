import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './views/home.html'
})
export class AppComponent {
  public title: string;
  public description: string;

  constructor() {
    this.title = 'app Favoritos!';
    this.description = 'Aplicación web SPA con Angular 2 para gestionar favoritos online';
  }
}
