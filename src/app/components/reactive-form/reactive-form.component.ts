import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})



export class ReactiveFormComponent {

  userForm: FormGroup; // nom du formulaire
  users: any[] =[];

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      // login: "adrien",  // adrin  val par defaut
      // password: ""
      //login: fb.control("", [Validators.required, Validators.minLength(3), Validators.email,]),
      //password: fb.control("", [Validators.required, Validators.pattern('^[a-zA-z]')])
      //password: fb.control("", [Validators.required])
      login: fb.control("",[Validators.required, this.checkValidator]),   // il comprend que 2 attributs
      password: fb.control("",[Validators.required])

    });
  }

  
  register() {
    console.log(this.userForm.value);
    this.users.push(this.userForm.value); // icic ca y est un obt de users a un login et pass du formulair et qui st déclaré en haut
    this.userForm.reset();
  }

  checkValidator(control: FormControl) {
    let str: string = control.value; // recuperer la valeur qu'on veut valider
    let regex = /^[A-Z].*$/
    if (regex.test(str)) {
      return null; // si c correcte ne retourne rien
    } else {
      return { erreur: 'error' };
    }
  }

  delete(obj: { login: string, password: string }) {
    const index: number = this.users.indexOf(obj);
    this.users.splice(index, 1);
  }



}
