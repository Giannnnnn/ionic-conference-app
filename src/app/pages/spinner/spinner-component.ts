import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'spinner-component',
  templateUrl: 'spinner-component.html',
  styleUrls: ['./spinner-component.css']
})
export class SpinnerComponent {
  constructor(public loadingController: LoadingController) {}


  public  async startGame(){
    const start = await this.loadingController.create({
      message: 'Get Ready!',
    });
    await start.present();
  }

 public async presentLoading() {
    const loading = await this.loadingController.create({
      //cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  public async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
     // cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
