import { Component } from '@angular/core';
import { Resource } from '..//models/resource';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {
  resources: Resource[] = [
    { id: 1, title: "Angular Guide", description: "Learn Angular", category: "Web Development", url: "https://angular.io", author: "Google", publicationDate: "2024-04-01" },
    { id: 2, title: "TypeScript Handbook", description: "Learn TypeScript", category: "Programming", url: "https://typescriptlang.org", author: "Microsoft", publicationDate: "2024-03-10" }
  ];

  selectedResource?: Resource;

  selectResource(resource: Resource) {
    this.selectedResource = resource;
  }
}
