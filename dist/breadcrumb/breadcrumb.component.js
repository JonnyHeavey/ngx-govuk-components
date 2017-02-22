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
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        //<a class="gv-c-breadcrumbs__list-link" href="/section/sub-section">Sub-section</a>
        // List of items to build breadcrumb with
        // Expects sequence of array items to match desired breadcrumb sequence
        this.listItems = [];
        // Whether to create hyperlink for last breadcrumb item
        this.linkLastItem = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BreadcrumbComponent.prototype, "listItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BreadcrumbComponent.prototype, "linkLastItem", void 0);
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'ngx-govuk-breadcrumb',
            template: "\n    <div class=\"gv-c-breadcrumbs\">\n        <ol class=\"gv-c-breadcrumbs__list gv-u-cf\">\n          <li *ngFor=\"let item of listItems; let last = last\" class=\"gv-c-breadcrumbs__list-item\">\n            \n            <a *ngIf=\"!last || linkLastItem\" class=\"gv-c-breadcrumbs__list-link\" href=\"{{ item.link }}\">\n              {{ item.label }}\n            </a>\n\n            <span *ngIf=\"last && !linkLastItem\">{{ item.label }}</span>\n\n          </li>\n        </ol>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
