import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';

const routes: Routes = [
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/:id', component: ResourceDetailsComponent },
  { path: 'add-resource', component: AddResourceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
