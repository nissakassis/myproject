import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/shared/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  persons!: Person[];
  person: Person = {};
  personget: Person = {};
  // injecter le service
  constructor(private personService: PersonService) { };

  // getALL retourne une observable 
  // et il faut subscribe à cet observale pour récupérer les données
  //par la methode susbscribe on récupère l'observable
  ngOnInit() {
    this.personService.getAll().subscribe(res => {  // res est une observable
      this.persons = res; // e,ncapsuler la val révupérée "res" du service dans la table persons
      console.log(res);

      // this.personService.add(this.person);

    })
  }

  ajoutPerson() {
    this.personService.add(this.person).subscribe(res => {
      this.person = res;
    }
    );
    // this.persons.push(this.person);
    // form.reset();
    // this.personService.add()
    //this.form.reset();
    // this.lastName= "";
  }

  personbyId(id: number) {
    this.personService.getById(id).subscribe(res => {
      this.person = res;
    });
  }

  persdeleteById(id: number) {
    this.personService.deleteById(id).subscribe(res => {
      this.person = res;
    });
  }
}
