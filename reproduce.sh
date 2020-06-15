npm install -g @angular/cli # Ensure 9.1.8+
ng new a9-child-discovery-iss -s -t --minimal --routing --interactive=false
cd a9-child-discovery-iss/
ng add @nguniversal/express-engine
ng g m parent --route parent --module app
ng g m parent/child --route child --module parent
ng g m parent/lazy-child --route lazy-child --module parent

# Create makeshift nav
cat << "EOF" > src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="['/']">Root</a> - <a [routerLink]="['parent']">Parent</a> - <a [routerLink]="['parent/child']">Child</a> - <a [routerLink]="['parent/lazy-child']">Lazy Child</a><router-outlet></router-outlet>`,
})
export class AppComponent {}
EOF

# Change child to be a children route of parent
cat << "EOF" > src/app/parent/parent-routing.module.ts
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
EOF

# Add router-outlet to parent
cat << "EOF" > src/app/parent/parent.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<p>parent works!</p><router-outlet></router-outlet>`,
  styles: []
})
export class ParentComponent {}
EOF
