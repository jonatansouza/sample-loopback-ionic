import { Hero } from './hero.interface';
import { HeroProvider } from './hero.provider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public heroes: Hero[];
  constructor(public heroProvider: HeroProvider) {
  }
  
  ionViewWillEnter(){
    this.heroProvider.getHeroes().subscribe( heroes => this.heroes = heroes)
    console.log("test")
  }

  public selectHero(hero) {
    console.info(hero);
  }
}
