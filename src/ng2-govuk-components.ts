import { NgModule, ModuleWithProviders } from '@angular/core';

import { GovUKBannerModule } from './banner';

const GOVUK_COMPONENT_MODULES = [
  GovUKBannerModule,
  
];

@NgModule({
  imports: [
    GovUKBannerModule.forRoot(),
  ],
  exports: GOVUK_COMPONENT_MODULES
})
export class GovUKComponentsRootModule { }

@NgModule({
    imports: GOVUK_COMPONENT_MODULES,
    exports: GOVUK_COMPONENT_MODULES
})
export class GovUKComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: GovUKComponentsRootModule};
  }
}
