import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * @encapsulation allows disabling of shadow dom for this components style
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
