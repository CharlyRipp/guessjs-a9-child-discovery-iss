import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  template: `
    <p>
      lazy-child works!
    </p>
  `,
  styles: []
})
export class LazyChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
