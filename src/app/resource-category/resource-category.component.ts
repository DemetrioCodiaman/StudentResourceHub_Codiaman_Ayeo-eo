import { Component, Input } from '@angular/core';
import { Resource } from '..//models/resource';

@Component({
  selector: 'app-resource-category',
  templateUrl: './resource-category.component.html',
  styleUrls: ['./resource-category.component.css']
})
export class ResourceCategoryComponent {
  @Input() category: string = "";
  @Input() resources: Resource[] = [];

  get filteredResources() {
    return this.resources.filter(res => res.category === this.category);
  }
}
