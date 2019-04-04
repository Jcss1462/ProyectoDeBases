import { Component, OnInit } from '@angular/core';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }

}
