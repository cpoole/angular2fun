import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as bcrypt from 'bcryptjs';

import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: "my-dashboard",
  templateUrl: "app/components/dashboard/dashboard.component.html",
  styleUrls: ["app/components/dashboard/dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private _heroService: HeroService,
    private _router: Router) {
    console.log(bcryptjs.hashSync("nraboy", 8));
  }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
      let link = ["HeroDetail", { id: hero.id }];
      this._router.navigate(link);
  }
}
