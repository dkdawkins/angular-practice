import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Returns a Hero array consisting of mock heroes
  getHeroes(): Observable<Hero[]> {

    // TODO: send the message _after_ fetching the heroes
    
    this.messageService.add('HeroService: fetched heroes');

    // Returns an Observable<Hero[]> that emits a single value (the array)
    return of(HEROES);
  }
}
