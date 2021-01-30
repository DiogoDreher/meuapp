import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public posts: Post[] = [
    new Post("João", "Meu Post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Diogo", "Posto do Diogo", "Sub Diogo", "diogo@gmail.com", "Msg do Diogo"),
    new Post("Bruno", "Posto do Bruno", "Sub Bruno", "bruno@gmail.com", "Msg do Bruno"),
    new Post("João", "Meu Post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Diogo", "Posto do Diogo", "Sub Diogo", "diogo@gmail.com", "Msg do Diogo"),
    new Post("Bruno", "Posto do Bruno", "Sub Bruno", "bruno@gmail.com", "Msg do Bruno"),
    new Post("João", "Meu Post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Diogo", "Posto do Diogo", "Sub Diogo", "diogo@gmail.com", "Msg do Diogo"),
    new Post("Bruno", "Posto do Bruno", "Sub Bruno", "bruno@gmail.com", "Msg do Bruno"),
  ];
}
