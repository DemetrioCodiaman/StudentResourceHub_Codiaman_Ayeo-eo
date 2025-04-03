import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
