import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div [routerLink]="['/']">Root</div><div [routerLink]="['parent']">Parent</div><div [routerLink]="['parent/child']">Child</div><router-outlet></router-outlet>`,
})
export class AppComponent {}
