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
var BannerComponent = (function () {
    function BannerComponent() {
        // TODO make this an ENUM
        // GDS phase - supports alpha or beta
        this.phase = "beta";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BannerComponent.prototype, "phase", void 0);
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'ngx-govuk-banner',
            template: "\n  <div class=\"gv-c-phase-banner\">\n    <div class=\"gv-c-phase-banner__content\">\n      <strong class=\"gv-c-phase-tag\">{{ phase }}</strong>\n      <span class=\"gv-c-phase-banner__text\"><ng-content></ng-content></span>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
