import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { MainPageComponent }   from './main-page/main-page.component';
import { GeneroComponent }   from './genero/genero.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'genero', component: GeneroComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
