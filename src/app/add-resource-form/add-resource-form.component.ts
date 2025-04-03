import { Component, EventEmitter, Output } from '@angular/core';
import { Resource } from '..//models/resource';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.css']
})
export class AddResourceFormComponent {
  @Output() addResource = new EventEmitter<Resource>();

  newResource: Resource = {
    id: 0,
    title: '',
    description: '',
    category: '',
    url: '',
    author: '',
    publicationDate: new Date().toISOString().split('T')[0]
  };

  submitResource() {
    this.newResource.id = Math.floor(Math.random() * 1000);
    this.addResource.emit(this.newResource);
    this.newResource = { id: 0, title: '', description: '', category: '', url: '', author: '', publicationDate: new Date().toISOString().split('T')[0] };
  }
}
