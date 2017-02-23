import { NgModule } from '@angular/core';

import { BackLinkModule } from './back-link';
import { BannerModule } from './banner';
import { BreadcrumbModule } from './breadcrumb';
import { ButtonModule } from './button';
import { DetailModule } from './detail';
import { NoticeModule } from './notice';
import { ProseModule } from './prose';
import { TextAreaModule } from './text-area';
import { TextInputModule } from './text-input';

const modules = [
  BackLinkModule,
  BannerModule,
  BreadcrumbModule,
  ButtonModule,
  DetailModule,
  NoticeModule,
  ProseModule,
  TextAreaModule,
  TextInputModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NgxGovUKComponentsModule {}
