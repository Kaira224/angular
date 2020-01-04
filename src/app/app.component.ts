import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngApp';
  contact = {
    nom : 'Kairaba Keita',
    email : 'kairaba.gn@gmail.com'
  };
}
