import { Component, Input } from '@angular/core';
import { NavbarItem } from './navbar-item.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() navbarItems: NavbarItem[];

}
