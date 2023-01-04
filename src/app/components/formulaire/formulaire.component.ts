import { Component } from '@angular/core';
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
  
  users: Array<User> = [];
//{ id: 1, name: 'John', email: "john.wick@gmail.com" },
  register() {
    console.log(this.log, this.pwd);
  }

  ajoutUser() {
    this.users.push({ id: this.id , name: this.name , email: this.email });
  }

  clear() {
   // this.name = '';
    //this.email='';
  }

  remove(index: number) {
    this.users.splice(index,1);
  }
}
