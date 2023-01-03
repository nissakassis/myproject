import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"", component: HomeComponent}, // a chaque fois qu j'y vais au site le homecomponent s'affiche
  {path: "form", component: FormulaireComponent},
  // une route chemin vide et une route chemin form
  {path: "404", component: NotFoundComponent},

  // ci dessous si on a ecrit ds page html un chemin faux ou inexsitant
  // ci dessous ns redirige vers chemin 404 et affiche contenu de la page 
  // NotFound associée à ce chemin
  {path: "**", redirectTo: '/404'}, // tjrs cette instruction doit etre à la fin,
  // sinon les routes suivantes ne seront pas atteintes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
