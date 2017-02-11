import { NgModule } from '@angular/core';

import { BannerModule } from './banner';

const modules = [
  BannerModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NgxGovUKComponentsModule {}
