import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //activar lista de genero
  activarGenero(): void {
    let activador= document.getElementById("listagenero");
    activador.classList.toggle('active');
  }

  //activar lista de artista
  activarArtista(): void {
    let activador= document.getElementById("listaArista");
    activador.classList.toggle('active');
  }

  //activar lista de foto
  activarFoto(): void {
    let activador= document.getElementById("listafoto");
    activador.classList.toggle('active');
  }


}
