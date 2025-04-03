import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your HomeComponent
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { ProgrammingComponent } from './categories/programming/programming.component'; // Import ProgrammingComponent
import { DesignComponent } from './categories/design/design.component'; // Import DesignComponent
import { MathComponent } from './categories/math/math.component'; // Import MathComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Main route for Home
  { path: 'about', component: AboutComponent }, // Main route for About
  { path: 'add-resources', component: AddResourcesComponent }, // Main route for Add Resources
  { 
    path: 'categories', 
    component: CategoriesComponent, // Parent route for Categories
    children: [
      { path: 'programming', component: ProgrammingComponent }, // Child route for Programming
      { path: 'design', component: DesignComponent }, // Child route for Design
      { path: 'math', component: MathComponent } // Child route for Math
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }