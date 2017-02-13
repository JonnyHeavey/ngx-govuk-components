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
var banner_1 = require('./banner');
var button_1 = require('./button');
var notice_1 = require('./notice');
var modules = [
    banner_1.BannerModule,
    button_1.ButtonModule,
    notice_1.NoticeModule
];
var NgxGovUKComponentsModule = (function () {
    function NgxGovUKComponentsModule() {
    }
    NgxGovUKComponentsModule = __decorate([
        core_1.NgModule({
            imports: modules.slice(),
            exports: modules.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], NgxGovUKComponentsModule);
    return NgxGovUKComponentsModule;
}());
exports.NgxGovUKComponentsModule = NgxGovUKComponentsModule;
