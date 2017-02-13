import { NgModule } from '@angular/core';

import { BackLinkModule } from './back-link';
import { BannerModule } from './banner';
import { ButtonModule } from './button';
import { DetailModule } from './detail';
import { NoticeModule } from './notice';
import { ProseModule } from './prose';

const modules = [
  BackLinkModule,
  BannerModule,
  ButtonModule,
  DetailModule,
  NoticeModule,
  ProseModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NgxGovUKComponentsModule {}
