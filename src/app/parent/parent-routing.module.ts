import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: '', component: ParentComponent, children: [
    { path: 'child', component: ChildComponent },
    { path: 'lazy-child', loadChildren: () => import('./lazy-child/lazy-child.module').then(m => m.LazyChildModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
