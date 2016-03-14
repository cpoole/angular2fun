import {Component}        from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroService}      from '../../services/hero/hero.service';
import {HeroesComponent}  from '../heroes/heroes.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['src/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },



])
export class AppComponent {
  title = 'Tour of Heroes';
}
