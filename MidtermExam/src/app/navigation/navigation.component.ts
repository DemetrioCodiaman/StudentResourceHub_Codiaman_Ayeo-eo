import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddResourcesComponent } from '../add-resources/add-resources.component';
import { AboutComponent } from '../about/about.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
