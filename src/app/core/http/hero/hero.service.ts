import { Injectable } from '@angular/core';
import { Hero } from '@app/core/models/hero.model';
import { HEROES } from '@app/core/mocks/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  get heroes(): Hero[] {

    return HEROES;
  }
}

