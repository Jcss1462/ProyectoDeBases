import { Injectable } from '@angular/core';


//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Canart } from './Canart';
////////////////

@Injectable({
  providedIn: 'root'
})
export class CancionesartistasService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/cancionesartistas'

  constructor(private http: HttpClient) { 
    console.log("funcionando servico cancionesservicio");
  }

  getArtists(id: string): Observable<Canart[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Canart[]>(this.resourceURL);

    } else {
      return this.http.get<Canart[]>(this.resourceURL + "?artid=" + id);
    }
  }


}
