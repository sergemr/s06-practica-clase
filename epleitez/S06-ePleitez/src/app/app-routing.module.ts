import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticaComponent } from './practica/practica.component'; 


const routes: Routes = [
 

  { path: 'practica' , component: PracticaComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
