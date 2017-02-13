import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-detail',
  template: `
    <details class="gv-c-details">
        <summary class="gv-c-details__summary">
            <span class="gv-c-details__summary-text">{{ summary }}</span>
        </summary>
        <div class="panel panel-border-narrow">
            <ng-content></ng-content>
        </div>
    </details>
  `
})
export class DetailComponent {

  // TODO angular animate the expand/collapse
  // TODO animate the arrow

  @Input() summary : string = "";

  constructor() {}

}
