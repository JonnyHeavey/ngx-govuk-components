import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-banner',
  template: `
  <div class="gv-c-phase-banner">
    <div class="gv-c-phase-banner__content">
      <strong class="gv-c-phase-tag">{{ phase }}</strong>
      <span class="gv-c-phase-banner__text">You can help us improve this app by completing our survey.</span>
    </div>
  </div>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  // TODO support custom message text
  // TODO support clickable part of the message
  // TODO add childcomponent clickable close button

  // TODO make this an ENUM
  // GDS phase - supports alpha or beta
  @Input() phase : string = "beta";

  constructor() {}

}
