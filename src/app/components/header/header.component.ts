import { Component, signal } from '@angular/core';
import { nav } from '../../interfaces/header.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links = signal<nav[]>([
    {
      name: 'Home',
      path: '#'
    },

    {
      name: 'Introducing',
      path: '#intro'
    },


    {
      name: 'infrastructure',
      path: '#infra'
    },

    {
      name: 'Power',
      path: '#power'
    },
  ])

  navToogle: boolean = false

  nav() {
    if(this.navToogle === true) {
      return this.navToogle = false
    }

    return this.navToogle = true
  }
}
