import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InitPageComponent } from '../../components/home/init-page/init-page.component';
import { DesignedSectionComponent } from '../../components/home/designed-section/designed-section.component';
import { ContentSectionComponent } from '../../components/home/content-section/content-section.component';
import { PowerSectionComponent } from '../../components/home/power-section/power-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    InitPageComponent,
    DesignedSectionComponent,
    ContentSectionComponent,
    PowerSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
