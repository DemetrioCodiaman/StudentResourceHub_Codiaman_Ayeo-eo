import { Component, Input } from '@angular/core';
import { Resource } from '..//models/resource';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent {
  @Input() resource?: Resource;
}
