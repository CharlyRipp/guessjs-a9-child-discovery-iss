import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { ChildModule } from './child/child.module';


@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    ChildModule
  ]
})
export class ParentModule { }
