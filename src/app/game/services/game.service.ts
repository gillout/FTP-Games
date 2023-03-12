import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {createGame, createGameLight, Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getById(id: number): Observable<Game> {
    return this.httpClient.get<any>(`${this.API_URL}/game?id=${id}`)
      .pipe(map(data => createGame(data))
    );
  }

  getAll(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${this.API_URL}/games`)
      .pipe(map(datas => datas.map(data => createGameLight(data))
    ));
  }
}
