import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // Sets heroService to a singleton instance of HeroService
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Best practice to call init functions here, rather than the constructor
  ngOnInit(): void {
    this.getHeroes();
  }

  // Retrieves heroes from the HeroService (consumption of service)
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // Add a new hero to the data service, push to display, and clear the input field
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Remove a hero from the displayed list and delete them from the data service
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
