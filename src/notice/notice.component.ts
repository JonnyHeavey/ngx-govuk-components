import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-notice',
  template: `
<div class="gv-c-notice">
    <i class="gv-c-notice__icon gv-c-notice__icon--important"><span class="gv-c-notice__icon-fallback-text">Warning</span></i>
    <strong class="gv-c-notice__text"><ng-content></ng-content></strong>
</div>
  `
})
export class NoticeComponent {

  constructor() {}

}
