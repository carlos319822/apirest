import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GamesService} from "../services/swaggerbillingAPI/api/games.service";
import { Game } from "../services/swaggerbillingAPI/model/game";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'billingclient';
  team!: Game;
  game: Game[] = [];
  fullname: string = '';
  hayError: boolean = false;

  constructor(
    private rosterService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);

      this.rosterService
        .getGames(params['id'])
        .subscribe((roster) => {
          this.game = roster;
          console.log(roster);
        });
    });
  }

  getName(roster: Game) {
    return roster.week + ' ' + roster.season;
  }
}
