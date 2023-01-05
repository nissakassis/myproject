import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PersonComponent } from './components/person/person.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  // une route chemin vide et une route chemin form
  {path:"", component: HomeComponent}, // a chaque fois qu j'y vais au site le homecomponent s'affiche
  {path: "form", component: FormulaireComponent},
  {path: "reactive", component: ReactiveFormComponent},
  {path: "users", component: UsersComponent}, //chemin pour afficher la liste des users
  {path: "users/:userId", component: UserComponent}, //chemin pour afficher details d'un user specifique
  {path: "person", component: PersonComponent},
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
