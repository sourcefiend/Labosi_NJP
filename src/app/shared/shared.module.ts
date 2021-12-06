import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemestarPipe } from 'src/app/shared/pipes/semestar.pipe';



@NgModule({
  declarations: [
    SemestarPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SemestarPipe
  ]
})
export class SharedModule { }
