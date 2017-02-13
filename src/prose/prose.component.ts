import { Component } from '@angular/core';

@Component({
  selector: 'ngx-govuk-prose',
  template: `
  <div class="gv-s-prose"><ng-content></ng-content></div>
  `
})
export class ProseComponent {

  constructor() {}

}
