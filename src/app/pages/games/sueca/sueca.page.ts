import { LoadingController } from '@ionic/angular';
import { Component} from '@angular/core';
import { Player } from './player';
import { Cards } from './cards';
@Component({
  selector: 'app-sueca',
  templateUrl: './sueca.page.html',
  styleUrls: ['./sueca.page.scss'],
})
export class SuecaPage{
  constructor(public gameStartLoader:LoadingController){}
  public numberOfPlayers: number;
  public players: Array<Player> = [];
  public cards: Cards;
  public turn = 0;
  public roundDuration = 0;
  public cardSelected: number;
  public playerSelected?: Player;
  public FirstTurn: boolean;
  public LoaderIsActive: boolean;
  public startMenuIsActive = true;

  public CreatePlayers(numberOfPlayers: number): void {
    this.numberOfPlayers = numberOfPlayers;
    const player = new Player();
    for (let index = 0; index < this.numberOfPlayers; index++) {
      player.name = 'Player ' + index;
      player.numberInTheOrder = index;
      this.players.push(player);
    }
  }

  public StartGame(event): void {
    const numberOfPlayersSelected  = event.srcElement.innerHTML;
    console.log(numberOfPlayersSelected);
    this.RoundStart();
    this.CreatePlayers(numberOfPlayersSelected);
    this.RollCard();
    this.PresentLoading();
    this.IsFirstTurn();
    this.GenerateRounds();

    this.hideStartMenu();
    this.showPlayerCard(this.SelectPlayer());
    this.showCard(this.cardSelected);
  }
  hideStartMenu() {
    this.startMenuIsActive = false;
  }

  showCard(cardSelected: number) {
    throw new Error('Method not implemented.');
  }

  showPlayerCard(player: Player) {

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
    this.PresentLoading();
  }

  RoundStart() {
    this.turn++;
  }

  public async PresentLoading() {

  const loading = await this.gameStartLoader.create({
    cssClass: 'sueca.page.scss',
    message: 'Prepara o Estrago...',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');

}


  NumberSelected(number: number) {

  }


  public GenerateNumber(): number {
    let number = Math.floor((Math.random() * 52) + 1);
    return number;
  }


}

