import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const NGX_TEXT_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
};

@Component({
  selector: 'ngx-govuk-text-input',
  template: `
    <div class="gv-c-form-group ">
        <label *ngIf="label" class="gv-c-form-group__label" for="{{ id }}">
          {{ label }}
          <span *ngIf="hint" class="gv-c-form-group__hint">{{ hint }}</span>
        </label>
        <input class="gv-c-form-group__control" id="{{ id }}" [(ngModel)]="value">
    </div>
  `,
  providers: [NGX_TEXT_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextInputComponent implements ControlValueAccessor {

  // TODO add validation / error message display
  // TODO ensure no spaces in element id
  // TODO more flexible form group support - dont add to template

  @Input() id: string;

  @Input() label: string;

  @Input() hint: string;

  constructor() {}

  //The internal data model
  private innerValue: string = '';

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

}
