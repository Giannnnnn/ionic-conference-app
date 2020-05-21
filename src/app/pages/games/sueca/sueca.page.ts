import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { Cards } from './cards';
@Component({
  selector: 'app-sueca',
  templateUrl: './sueca.page.html',
  styleUrls: ['./sueca.page.scss'],
})
export class SuecaPage {
  public numberOfPlayers: number;
  public players: Player[];
  public cards: Cards;

public CreatePlayers():void {
  for(let index = 1; index+ 1 < this.numberOfPlayers + 1; index++) {
  let player = new Player();
  player.name = "Player " + index;
  this.players.push(player);
}
}

}

