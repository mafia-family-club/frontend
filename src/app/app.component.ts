import { Component } from '@angular/core';
import { NavbarItem } from './navbar';
import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  navbarItems: NavbarItem[] = [
    {
      title: 'Игроки',
      path: 'members'
    },
    {
      title: 'Встречи',
      path: 'meetings'
    }
  ];
}
