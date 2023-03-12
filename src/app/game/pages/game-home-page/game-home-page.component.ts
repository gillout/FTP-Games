import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';
import {filter, find} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-home-page',
  templateUrl: './game-home-page.component.html',
  styleUrls: ['./game-home-page.component.scss']
})
export class GameHomePageComponent implements OnInit {

  title: string = 'Les jeux Free-To-Play';
  games: Game[] = [];
  activeGame?: Game;
  receivedId?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') as string;
      if (id) {
        this.gameService.getById(+id).subscribe(
          game => this.activeGame = game
        );
      }
    });

    this.displayGamesList();
    this.displayGameDetails(this.receivedId = 1); //id par défaut
  }

  displayGamesList() {
    this.gameService.getAll().subscribe(
      games => {
        this.games = games.filter(
          game => game.releaseDate ? game.releaseDate.getFullYear() > new Date('2020-01-01').getFullYear() : false
        );
      }
    );
  }

  displayGameDetails(receivedId: number) {
    this.gameService.getById(receivedId).subscribe(
      activeGame => {
        this.activeGame = activeGame;
        console.log(activeGame.releaseDate + ': string');
      }
    );
  }

  receivedGameId(id: number) {
    this.receivedId = id;
    this.displayGameDetails(this.receivedId);
  }
}
