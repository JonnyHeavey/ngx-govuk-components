import { ControlValueAccessor } from '@angular/forms';
export declare const NGX_TEXT_AREA_CONTROL_VALUE_ACCESSOR: any;
export declare class TextAreaComponent implements ControlValueAccessor {
    cols: number;
    rows: number;
    id: string;
    label: string;
    hint: string;
    constructor();
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
