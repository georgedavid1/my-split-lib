import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-george-library-one',
  template: `
    <p>
      george-library-one works! OH SNAP IMPORTED
    </p>
  `,
  styles: [
  ]
})
export class GeorgeLibraryOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
