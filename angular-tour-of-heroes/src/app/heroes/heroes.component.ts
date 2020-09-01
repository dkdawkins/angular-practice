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
  selectedHero: Hero;

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

  // Assigns clicked hero from template to selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
