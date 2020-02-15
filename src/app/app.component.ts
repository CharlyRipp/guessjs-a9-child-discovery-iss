import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="['/']">Root</a> - <a [routerLink]="['parent']">Parent</a> - <a [routerLink]="['parent/child']">Child</a> - <a [routerLink]="['parent/lazy-child']">Lazy Child</a><router-outlet></router-outlet>`,
})
export class AppComponent {}
