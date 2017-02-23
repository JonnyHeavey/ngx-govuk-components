import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const NGX_TEXT_AREA_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaComponent),
    multi: true
};

@Component({
  selector: 'ngx-govuk-text-area',
  template: `
    <div class="gv-c-form-group ">
        <label *ngIf="label" class="gv-c-form-group__label" for="{{ id }}">
          {{ label }}
          <span *ngIf="hint" class="gv-c-form-group__hint">{{ hint }}</span>
        </label>
        <textarea class="gv-c-form-group__control" id="{{ id }}" cols="{{ cols }}" rows="{{ rows }}" [(ngModel)]="value">Content of text area</textarea>
    </div>
  `,
  providers: [NGX_TEXT_AREA_CONTROL_VALUE_ACCESSOR]
})
export class TextAreaComponent implements ControlValueAccessor {

  // TODO add validation / error message display
  // TODO ensure no spaces in element id
  // TODO more flexible form group support - dont add to template

  @Input() cols: number;

  @Input() rows: number;

  @Input() id: string;

  @Input() label: string;

  @Input() hint: string;

  constructor() {}

  private innerValue: string = '';

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
      return this.innerValue;
  };

  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

}
