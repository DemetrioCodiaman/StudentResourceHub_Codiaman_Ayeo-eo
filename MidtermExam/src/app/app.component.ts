import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "./about/about.component";
import { AddResourcesComponent } from "./add-resources/add-resources.component";
import { CategoriesComponent } from "./categories/categories.component";
import { DesignComponent } from "./categories/design/design.component";
import { ProgrammingComponent } from "./categories/programming/programming.component";
import { MathComponent } from "./categories/math/math.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MidtermExam';
}
