"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var banner_1 = require("./banner");
var GOVUK_COMPONENT_MODULES = [
    banner_1.GovUKBannerModule,
];
var GovUKComponentsRootModule = (function () {
    function GovUKComponentsRootModule() {
    }
    return GovUKComponentsRootModule;
}());
GovUKComponentsRootModule = __decorate([
    core_1.NgModule({
        imports: [
            banner_1.GovUKBannerModule.forRoot(),
        ],
        exports: GOVUK_COMPONENT_MODULES
    })
], GovUKComponentsRootModule);
exports.GovUKComponentsRootModule = GovUKComponentsRootModule;
var GovUKComponentsModule = (function () {
    function GovUKComponentsModule() {
    }
    GovUKComponentsModule.forRoot = function () {
        return { ngModule: GovUKComponentsRootModule };
    };
    return GovUKComponentsModule;
}());
GovUKComponentsModule = __decorate([
    core_1.NgModule({
        imports: GOVUK_COMPONENT_MODULES,
        exports: GOVUK_COMPONENT_MODULES
    })
], GovUKComponentsModule);
exports.GovUKComponentsModule = GovUKComponentsModule;
