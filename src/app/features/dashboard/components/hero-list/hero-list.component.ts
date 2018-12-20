import { Component, OnInit } from '@angular/core';
// TODO check why mock is not visible from @app/core
import { HEROES } from '@app/core/mocks';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {

    console.log(this.heroes);
  }

}
