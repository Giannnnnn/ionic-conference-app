import { Component, Input, OnInit,NgModule } from '@angular/core';
import { Player } from './player';
import { Cards } from './cards';
@Component({
  selector: 'app-sueca',
  templateUrl: './sueca.page.html',
  styleUrls: ['./sueca.page.scss'],
})
export class SuecaPage {
  public numberOfPlayers: number;
  public players: Array<Player> = [];
  public cards: Cards;
  public turn = 0;
  public roundDuration = 0;
  public cardSelected: number;
  public playerSelected: Player;
  public FirstTurn: boolean;
  public LoaderIsActive: boolean;

  public CreatePlayers(numberOfPlayers: number): void {
    this.numberOfPlayers = numberOfPlayers;
    const player = new Player();
    for (let index = 0; index < this.numberOfPlayers; index++) {
      player.name = 'Player ' + index;
      player.numberInTheOrder = index;
      this.players.push(player);
    }
    console.log(this.players.length);
  }

  public StartGame(event): void {
    const numberOfPlayersSelected  = event.srcElement.innerHTML;
    console.log(numberOfPlayersSelected);
    this.RoundStart();
    this.CreatePlayers(numberOfPlayersSelected);
    this.ActiveLoader();
    this.RollCard();
    this.ActiveSelectionLoading();
    this.IsFirstTurn();
    this.GenerateRounds();
    this.showPlayerCard(this.SelectPlayer());
    this.showCard(this.cardSelected);
  }

  showCard(cardSelected: number) {
    throw new Error('Method not implemented.');
  }

  showPlayerCard(player: Player) {
    throw new Error('Method not implemented.');
  }

  GenerateRounds() {
    this.roundDuration = this.players.length;
  }

  SelectPlayer(): Player {
    return this.playerSelected = this.players.find(p => p.numberInTheOrder == this.turn);

  }

  public RollCard(): void {
    const value = this.GenerateNumber();
    this.cardSelected = value;

  }

  public IsFirstTurn(): void {
    if (this.turn > 0) {
      this.FirstTurn = false;
    }
  }

  ActiveSelectionLoading(): void {
    this.ActiveLoader();
  }

  RoundStart() {
    this.turn++;
  }

  ActiveLoader(): void {
    this.LoaderIsActive = true;
    setTimeout (() => {
      this.UnactiveLoader();
   }, 1000);
  }

  UnactiveLoader():void{
    this.LoaderIsActive = false;
  }

  NumberSelected(number: number) {

  }


  public GenerateNumber(): number {
    let number = Math.floor((Math.random() * 52) + 1);
    return number;
  }


}

