import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InitPageComponent } from '../../components/home/init-page/init-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, InitPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
