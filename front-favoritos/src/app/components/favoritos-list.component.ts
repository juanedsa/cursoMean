import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../services/favorito.service';
import { Favorito } from '../models/favorito';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: '../views/favoritos-list.html',
  providers: [FavoritoService]
})
export class FavoritosListComponent implements OnInit{
  public title: string;
  public errorMessage: string;
  public favoritos: Favorito[];

  constructor(private favoritoService: FavoritoService) {
    this.title = 'Listado de Marcadores';
  }

  ngOnInit() {
    console.log('Favoritos list Component cargado ');
    this.favoritoService.getFavoritos().subscribe(
      result => {
        console.log(result);
        this.favoritos = result.favoritos;

        if(!this.favoritos) {
          alert('Error en el servidor');
        }
      },
      error => {
        this.errorMessage = <any>error;

        if(this.errorMessage !=null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    );
  }
}
