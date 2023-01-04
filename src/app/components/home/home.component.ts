import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  etudiants: number = 322; // etudiants est variable de typoe number
  //age: number = 19;
  dir: any = { prenom: 'Adrien' };
  quantites: number[] = [12, 189, 17, 12];


  position: number=2;

  //user1 : User = {}; // icic pas d'erreur meme si on n'a pas
  // mis les attributs, car ds l'interface on a mis ? donc
  // les att sont optionnels;

  user: User = { id: 1, name: 'John', email: "john.wick@gmail.com" };
  user2: User = { id: 2, name: 'Amin', email: "aminK@gmail.com" };
  user3: User = { id: 3, name: 'Nassim', email: "nassim@gmail.com" };
  user4: User = { id: 4, name: 'Amel', email: "amel@gmail.com" };

  users: Array<User> = [ // OU users: User[] = []
    // user2, user3 ?
    { id: 1, name: 'John', email: "john.wick@gmail.com" },
    { id: 2, name: 'Amin', email: "aminK@gmail.com" },
    { id: 3, name: 'Nassim', email: "nassim@gmail.com" },
    { id: 4, name: 'Amel', email: "amel@gmail.com" }
  ];


  afficheMessage(message: string): void {
    alert("mon message : " + message);
  }


  // Bouillonnement
  // Ajouter event et les deuc dernières lignes, pour que quand je clique sur 
  // Message enfant alors le message enf apparit seule et non plus avec son 
  // Meagge Parent
  // Voir page html
  afficheMessage2(message: string, event: any): void {
    alert("mon message : " + message);
    event.preventDeault();
    event.stopPropagation();
  }


  data: any[] = [{
    "id": 1,
    "name": "abc",
    "address": {    // 1 user a 1 seul adresse, et cette adresse a deux attributs
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [  // [{} {}] c un array compsé de 2 objets Projets, 1 user peut avoir 2 Projets!
      {
        "libelle": "lib1",
        "description": "desc1"
      },
      {
        "libelle": "lib1",
        "description": "desc1"
      }
    ]
  },

  {
    "id": 2,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
        "libelle": "lib1",
        "description": "desc1"
      },
      {
        "libelle": "lib1",
        "description": "desc1"
      }
    ]
  }]

  //ici on fait l'injection de dependance du service router
  // router est instance, un objetn de service
  constructor(private router: Router){}

  //creation d'une méthode goTo qui appelle la methode navigate par l'objet router
  goTo(): void{
    this.router.navigate(['/form']);
  }



}

