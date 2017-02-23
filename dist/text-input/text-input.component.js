"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var noop = function () {
};
exports.NGX_TEXT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TextInputComponent; }),
    multi: true
};
var TextInputComponent = (function () {
    function TextInputComponent() {
        //The internal data model
        this.innerValue = '';
        //Placeholders for the callbacks which are later providesd
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(TextInputComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    TextInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    TextInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    //From ControlValueAccessor interface
    TextInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    TextInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextInputComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextInputComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextInputComponent.prototype, "hint", void 0);
    TextInputComponent = __decorate([
        core_1.Component({
            selector: 'ngx-govuk-text-input',
            template: "\n    <div class=\"gv-c-form-group \">\n        <label *ngIf=\"label\" class=\"gv-c-form-group__label\" for=\"{{ id }}\">\n          {{ label }}\n          <span *ngIf=\"hint\" class=\"gv-c-form-group__hint\">{{ hint }}</span>\n        </label>\n        <input class=\"gv-c-form-group__control\" id=\"{{ id }}\" [(ngModel)]=\"value\">\n    </div>\n  ",
            providers: [exports.NGX_TEXT_INPUT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], TextInputComponent);
    return TextInputComponent;
}());
exports.TextInputComponent = TextInputComponent;
