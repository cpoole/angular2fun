// import { Component, OnInit } from '@angular/core';
//
// import { Hero } from '../../classes/hero';
// import { HeroService } from '../../services/hero/hero.service';
//
// @Component({
//   selector: 'my-app',
//   templateUrl: 'app/components/app/app.component.html',
//   styleUrls: ['app/components/app/app.component.css'],
//   providers: [HeroService]
// })
// export class AppComponent implements OnInit {
//   title = 'Tour of Heroes';
//   heroes: Hero[];
//   selectedHero: Hero;
//   constructor(private heroService: HeroService) { }
//   getHeroes(): void {
//     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }
//   ngOnInit(): void {
//     this.getHeroes();
//   }
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }
//
import { Component }          from '@angular/core';

@Component({
//  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/components/app/app.component.html',
  styleUrls: ['app/components/app/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
