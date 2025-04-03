import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    ResourceCategoryComponent,
    AddResourceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
