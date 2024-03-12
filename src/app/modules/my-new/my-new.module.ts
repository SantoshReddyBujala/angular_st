import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandFalseComponent } from './stand-false/stand-false.component';



@NgModule({
  declarations: [
    StandFalseComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    StandFalseComponent
  ]
})
export class MyNewModule { }
