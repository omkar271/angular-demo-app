import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

interface User {
  id:string;
  name:string;
  avatar:string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) selected!:boolean
  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  getSelectedUser() {}

  selectUser(){
    this.select.emit(this.user.id)
  }
}
