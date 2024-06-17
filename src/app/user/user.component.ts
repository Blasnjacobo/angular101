import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommentsComponent } from "../comments/comments.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [GamesComponent, CommentsComponent]
})

export class UserComponent {
  username = 'Alex Salazar';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName
  }

  greet(){
    alert('Hola!')
  }

}
