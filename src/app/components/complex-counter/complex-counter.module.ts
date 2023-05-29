import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexCounterComponent } from './complex-counter.component';



@NgModule({
  declarations: [ComplexCounterComponent],
  exports: [ComplexCounterComponent],
  imports: [
    CommonModule
  ]
})
export class ComplexCounterModule { }
