import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module'; // Import the routing module
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { ProgrammingComponent } from './categories/programming/programming.component';
import { DesignComponent } from './categories/design/design.component';
import { MathComponent } from './categories/math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
    AddResourcesComponent,
    ProgrammingComponent,
    DesignComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Include the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }