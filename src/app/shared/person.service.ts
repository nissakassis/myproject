import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // L'Url qui sera utilisé par le client pour réaliser des requets HTTP
  url: string = 'http://localhost:8080/persons';

  // Injecter le service HttpClient, utilise le protocole http
  constructor(private htttp: HttpClient) { }


  // Recupère la liste de personnes de la base de données
  // c le get de requete htttp
  getAll(){
    return this.htttp.get<Array<Person>>(this.url);
  }

  // Post
  add(p: Person) {
    return this.htttp.post<Person>(this.url,p);
  }

  //getbyId
  getById(id: number){
    return this.htttp.get<Person>(this.url +"/"+ id);
  }

  // Delete
  deleteById(id: number) {
    return this.htttp.delete<Person>(this.url +"/"+ id);
  }
}
