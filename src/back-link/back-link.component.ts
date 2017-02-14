import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-back-link',
  template: `
    <a href="#" class="gv-c-link-back">
      <ng-content></ng-content>
    </a>
  `
})
export class BackLinkComponent {

  constructor() {}

}
