import { NgModule } from '@angular/core';

import { BannerModule } from './banner';
import { ButtonModule } from './button';
import { NoticeModule } from './notice';

const modules = [
  BannerModule,
  ButtonModule,
  NoticeModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NgxGovUKComponentsModule {}
