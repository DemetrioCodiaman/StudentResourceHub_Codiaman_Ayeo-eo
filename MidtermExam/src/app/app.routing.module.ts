import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { ProgrammingComponent } from './categories/programming/programming.component'; 
import { DesignComponent } from './categories/design/design.component'; 
import { MathComponent } from './categories/math/math.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'add-resources', component: AddResourcesComponent }, 
  { 
    path: 'categories', 
    component: CategoriesComponent, 
    children: [
      { path: 'programming', component: ProgrammingComponent }, 
      { path: 'design', component: DesignComponent }, 
      { path: 'math', component: MathComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }