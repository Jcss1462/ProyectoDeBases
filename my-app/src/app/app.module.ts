import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { GeneroComponent } from './genero/genero.component';
import { ArtistaComponent } from './artista/artista.component';
import { CancionComponent } from './cancion/cancion.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
