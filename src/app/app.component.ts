import { Component } from '@angular/core';
import { Hero }      from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
      id:   1,
      name: 'windStorm'
  } 
  heroes = HEROES
  selectedHero: Hero;

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  

}

const HEROES: Hero[] = [

  {id: 11, name: "Jose Ricardo"},
  {id: 12, name: "Jose Ricardo 1"},
  {id: 13, name: "Jose Ricardo 2"},
  {id: 14, name: "Jose Ricardo 3"},
  {id: 15, name: "Jose Ricardo 4"},
  {id: 16, name: "Jose Ricardo 5"},
  {id: 17, name: "Jose Ricardo 6"},
  {id: 18, name: "Jose Ricardo 7"},
  {id: 19, name: "Jose Ricardo 8"}
]

