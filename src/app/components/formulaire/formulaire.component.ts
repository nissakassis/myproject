import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  log!: string;  // initialisation comme en bas null
  //pwd: string = "null";
  pwd!: string;

  id!: number;
  name!: string;
  email!: string;

  // // correction damien
  login: Login = {};
  logins: Login[] = [];

  ajoutLogin() {
    this.logins.push(this.login);
    // this.users.push(this.user) si on a crée un user
  }

  // FORMULAIRE AVEC VALIDATION
  //email!: string;
  password!: string;

  tab: Array<{ email: string, password: string }> = [];

  register() {
    const obj: { email: string, password: string } = { email: this.email, password: this.password };
    console.log(obj);
    this.tab.push(obj);
    this.tab.forEach(i => console.log(i));
    this.email = '';
    this.password = '';
  }

  delete(obj: { email: string, password: string }) {
    const index: number = this.tab.indexOf(obj);
    this.tab.splice(index, 1);
  }

  // Formulaire exo nissa resolution
  users: Array<User> = [];
  // //{ id: 1, name: 'John', email: "john.wick@gmail.com" },
  //   register() {
  //     console.log(this.log, this.pwd);
  //   }

  ajoutUser() {
    this.users.push({ id: this.id, name: this.name, email: this.email });
    // this.users.push(this.user) si on a crée un user
  }

  clear() {
    // this.name = '';
    //this.email='';
  }

  remove(index: number) {
    this.users.splice(index, 1);
  }




}
