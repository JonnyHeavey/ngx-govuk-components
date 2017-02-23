import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextInputComponent } from './text-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TextInputComponent],
  declarations: [TextInputComponent]
})
export class TextInputModule {}
