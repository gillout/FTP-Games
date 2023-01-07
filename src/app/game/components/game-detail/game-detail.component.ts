import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game?: Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.gameService.getById('id').subscribe(
        game => this.game = game
      );
    });
  }

}
