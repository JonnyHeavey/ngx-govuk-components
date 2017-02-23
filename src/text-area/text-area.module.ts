import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextAreaComponent } from './text-area.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TextAreaComponent],
  declarations: [TextAreaComponent]
})
export class TextAreaModule {}
