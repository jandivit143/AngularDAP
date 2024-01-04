import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './components/lazy-one/lazyone.component';
import { LazyTwoComponent } from './components/lazy-two/lazytwo.component';
import { LazyRoutingModule } from './lazy-routing.component';



@NgModule({
  declarations: [
    LazyOneComponent,
    LazyTwoComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  // exports: [
  //   LazyOneComponent,
  //   LazyTwoComponent
  // ]
})
export class LazyModule {
  constructor(){
    // console.log('Lazy module loaded!');
  }
}
