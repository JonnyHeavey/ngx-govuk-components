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
exports.NGX_TEXT_AREA_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TextAreaComponent; }),
    multi: true
};
var TextAreaComponent = (function () {
    function TextAreaComponent() {
        this.innerValue = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(TextAreaComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
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
    TextAreaComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    TextAreaComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TextAreaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextAreaComponent.prototype, "cols", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextAreaComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "hint", void 0);
    TextAreaComponent = __decorate([
        core_1.Component({
            selector: 'ngx-govuk-text-area',
            template: "\n    <div class=\"gv-c-form-group \">\n        <label *ngIf=\"label\" class=\"gv-c-form-group__label\" for=\"{{ id }}\">\n          {{ label }}\n          <span *ngIf=\"hint\" class=\"gv-c-form-group__hint\">{{ hint }}</span>\n        </label>\n        <textarea class=\"gv-c-form-group__control\" id=\"{{ id }}\" cols=\"{{ cols }}\" rows=\"{{ rows }}\" [(ngModel)]=\"value\">Content of text area</textarea>\n    </div>\n  ",
            providers: [exports.NGX_TEXT_AREA_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], TextAreaComponent);
    return TextAreaComponent;
}());
exports.TextAreaComponent = TextAreaComponent;
