import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  { path: '', component: ParentComponent, children: [
    { path: 'child', loadChildren: () => import('./child/child.module').then(m => m.ChildModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
