import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Returns a Hero array consisting of mock heroes
  getHeroes(): Observable<Hero[]> {
    
    // Returns an Observable<Hero[]> that emits a single value (the array)
    return of(HEROES);
  }
}
