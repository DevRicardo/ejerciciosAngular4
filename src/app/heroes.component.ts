import { Component,OnInit } from '@angular/core';
import { Hero }      from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
   
  constructor(private heroService: HeroService){

  }  
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroesSlowly().then(heroes => 
      this.heroes = heroes
    );
  }
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  

}