import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: '../views/favoritos-list.html'
})
export class FavoritosListComponent {
  public title: string;

  constructor() {
    this.title = 'app Favoritos!';
  }
}
