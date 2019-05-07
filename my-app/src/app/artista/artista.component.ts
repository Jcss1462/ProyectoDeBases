import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';


//serbicios
import { Artist } from '../servicios/Artistas/artist';
import{ArtistasService} from '../servicios/Artistas/artistas.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artists: Artist[];


  private id: string;

  constructor(private location: Location,private router: Router,private _Artistas:ArtistasService) { 
   
    //sacar el parametro id y meterlo en un variable
    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
    
  }

  ngOnInit() {

    this._Artistas.getArtists(this.id)
    .subscribe(artists => this.artists = artists);


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
