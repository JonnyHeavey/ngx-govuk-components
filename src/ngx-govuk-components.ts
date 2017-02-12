import { NgModule } from '@angular/core';

import { BannerModule } from './banner';
import { ButtonModule } from './button';

const modules = [
  BannerModule,
  ButtonModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NgxGovUKComponentsModule {}
