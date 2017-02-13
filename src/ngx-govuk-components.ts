import { NgModule } from '@angular/core';

import { BannerModule } from './banner';
import { ButtonModule } from './button';
import { NoticeModule } from './notice';
import { ProseModule } from './prose';

const modules = [
  BannerModule,
  ButtonModule,
  NoticeModule,
  ProseModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NgxGovUKComponentsModule {}
