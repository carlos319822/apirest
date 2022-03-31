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
    private gameService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);

      this.gameService
        .getGames(params['id'])
        .subscribe((game) => {
          this.game = game;
          console.log(game);
        });
    });
  }

  getName(game: Game) {
    return game.week + ' ' + game.season;
  }
}
