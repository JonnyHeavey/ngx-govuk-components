import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-button',
  template: `
  <button class="gv-c-button" [ngClass]="{'gv-c-button--start': isStart}">
    <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent {

  // TODO support primary buttons
  // TODO support 'external' buttons

  @Input() isStart : boolean = false;

  constructor() {}

}
