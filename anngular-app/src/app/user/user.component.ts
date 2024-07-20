import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]

  get imagePath(){
    return 'assets/'  + this.selectedUser.avatar;
  }
  
  getSelectedUser(){
    randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex]
  }
}
