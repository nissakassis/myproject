import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  //si ca ne marche pas ci dessus on rajoute impliments OnInit


  // service qui permet de récupérer le paramètre ds la route appelée
  constructor(private route: ActivatedRoute) {} 
  //ActivatedRoute : service qui permet de recuperer les paramètres: le userid précisé ds le chemin
  // dans le fichier app-routing


  // methode du cycle de vie d'un composant
  // methode appelée à l'initialisation du composant
  ngOnInit() {
    // Methode synchrone
    const id = this.route.snapshot.params["userId"];
    console.log(id)
  }
}
