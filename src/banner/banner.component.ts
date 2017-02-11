import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-banner',
  template: `
  <div class="gv-c-phase-banner">
    <div class="gv-c-phase-banner__content">
      <strong class="gv-c-phase-tag">{{ phase }}</strong>
      <span class="gv-c-phase-banner__text"><ng-content></ng-content></span>
    </div>
  </div>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  // TODO make this an ENUM
  // GDS phase - supports alpha or beta
  @Input() phase : string = "beta";

  constructor() {}

}
