import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './views/home.html'
})
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'app Favoritos!';
  }
}
