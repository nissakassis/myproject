import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Array<User> = [ // OU users: User[] = []
    { id: 1, name: 'John', email: "john.wick@gmail.com" },
    { id: 2, name: 'Amin', email: "aminK@gmail.com" },
    { id: 3, name: 'Nassim', email: "nassim@gmail.com" },
    { id: 4, name: 'Amel', email: "amel@gmail.com" }
  ];

  
  constructor(private router: Router) {}

  getUserDetails(userId: number): void {
    this.router.navigate(['/users', userId]);
  }
}
