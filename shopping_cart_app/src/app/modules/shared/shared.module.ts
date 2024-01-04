import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/sharedcomp.component';
import AnotherComponent from './components/another.component';



@NgModule({
  declarations: [
    SharedComponent,
    AnotherComponent
  ],
  imports: [
    CommonModule
  ],
  // Exporting Shared Component from Shared Module
  exports: [
    SharedComponent,
    AnotherComponent
  ]
})
export class SharedModule {
  constructor(){
    // console.log('Shared Module loaded!');
  }
}
