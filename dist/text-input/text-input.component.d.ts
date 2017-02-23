import { ControlValueAccessor } from '@angular/forms';
export declare const NGX_TEXT_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TextInputComponent implements ControlValueAccessor {
    id: string;
    label: string;
    hint: string;
    constructor();
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    value: any;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
