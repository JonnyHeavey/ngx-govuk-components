import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-govuk-button',
  template: `
  <button class="gv-c-button" [ngClass]="{'gv-c-button--start': isStart}">
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() isStart : boolean = false;

  constructor() {}

}
