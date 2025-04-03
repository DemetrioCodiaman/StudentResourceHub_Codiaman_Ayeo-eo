import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your HomeComponent
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'categories', component: CategoriesComponent }, // Categories route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'add-resources', component: AddResourcesComponent }, // Add Resources route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }