import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-george-library-two',
  template: `
    <p>
      george-library-two works! OH SNAP IMPORTED A SECOND TIME
      BUT CAN YOU SEE ME IN LIB ONE!?
    </p>
  `,
  styles: [
  ]
})
export class GeorgeLibraryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
