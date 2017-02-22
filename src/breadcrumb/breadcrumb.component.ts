import { Component, Input } from '@angular/core';

import { BreadcrumbItem } from './breadcrumbItem.model'

@Component({
  selector: 'ngx-govuk-breadcrumb',
  template: `
    <div class="gv-c-breadcrumbs">
        <ol class="gv-c-breadcrumbs__list gv-u-cf">
          <li *ngFor="let item of listItems; let last = last" class="gv-c-breadcrumbs__list-item">
            <a *ngIf="!last || linkLastItem" class="gv-c-breadcrumbs__list-link" href="{{ item.link }}">
              {{ item.label }}
            </a>
            <span *ngIf="last && !linkLastItem">{{ item.label }}</span>
          </li>
        </ol>
    </div>
  `
})
export class BreadcrumbComponent {

  // List of items to build breadcrumb with
  // Expects sequence of array items to match desired breadcrumb sequence
  @Input() listItems: Array<BreadcrumbItem> = [];

  // Whether to create hyperlink for last breadcrumb item
  @Input() linkLastItem: boolean = false;

  constructor() {}

}
