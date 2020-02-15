import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyChildRoutingModule } from './lazy-child-routing.module';
import { LazyChildComponent } from './lazy-child.component';


@NgModule({
  declarations: [LazyChildComponent],
  imports: [
    CommonModule,
    LazyChildRoutingModule
  ]
})
export class LazyChildModule { }
