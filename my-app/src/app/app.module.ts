import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { GeneroComponent } from './genero/genero.component';
import { ArtistaComponent } from './artista/artista.component';
import { CancionComponent } from './cancion/cancion.component';

//http
import { HttpClientModule } from '@angular/common/http';

//servicios
import{ArtistasService} from './servicios/Artistas/artistas.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GeneroComponent,
    ArtistaComponent,
    CancionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArtistasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
