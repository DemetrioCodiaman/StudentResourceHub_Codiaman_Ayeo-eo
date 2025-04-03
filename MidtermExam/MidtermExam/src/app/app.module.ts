import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component'; // Import the FooterComponent
import { AppRoutingModule } from './app.routing.module'; // Import the routing module
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CategoriesComponent,
    AboutComponent,
    AddResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Include the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }