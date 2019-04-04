import { Component, OnInit } from '@angular/core';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  //activar biografia
  activarBiografia(): void {
    let activador = document.getElementById("listabiografia");
    activador.classList.toggle('active');
  }


  //activar lista de genero
  activarGenero(): void {
    let activador= document.getElementById("listagenero");
    activador.classList.toggle('active');
  }


  //activar lista de canciones
  activarCancion(): void {
    let activador = document.getElementById("listaCanciones");
    activador.classList.toggle('active');
  }

  //activar lista de Albums
  activarAlbum(): void {
    let activador= document.getElementById("listaAlbums");
    activador.classList.toggle('active');
  }
  
  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }


}
