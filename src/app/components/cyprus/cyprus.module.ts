import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyprusComponent } from './cyprus.component';



@NgModule({
  declarations: [CyprusComponent],
  exports: [CyprusComponent],
  imports: [
    CommonModule
  ]
})
export class CyprusModule { }
