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
var DetailComponent = (function () {
    function DetailComponent() {
        // TODO angular animate the expand/collapse
        // TODO animate the arrow
        this.summary = "";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DetailComponent.prototype, "summary", void 0);
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'ngx-govuk-detail',
            template: "\n    <details class=\"gv-c-details\">\n        <summary class=\"gv-c-details__summary\">\n            <span class=\"gv-c-details__summary-text\">{{ summary }}</span>\n        </summary>\n        <div class=\"panel panel-border-narrow\">\n            <ng-content></ng-content>\n        </div>\n    </details>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
