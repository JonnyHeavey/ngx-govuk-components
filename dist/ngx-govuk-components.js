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
var back_link_1 = require('./back-link');
var banner_1 = require('./banner');
var breadcrumb_1 = require('./breadcrumb');
var button_1 = require('./button');
var detail_1 = require('./detail');
var notice_1 = require('./notice');
var prose_1 = require('./prose');
var text_area_1 = require('./text-area');
var text_input_1 = require('./text-input');
var modules = [
    back_link_1.BackLinkModule,
    banner_1.BannerModule,
    breadcrumb_1.BreadcrumbModule,
    button_1.ButtonModule,
    detail_1.DetailModule,
    notice_1.NoticeModule,
    prose_1.ProseModule,
    text_area_1.TextAreaModule,
    text_input_1.TextInputModule
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
