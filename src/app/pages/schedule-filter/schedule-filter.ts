import { Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';


@Component({
  selector: 'page-schedule-filter',
  templateUrl: 'schedule-filter.html',
  styleUrls: ['./schedule-filter.scss'],
})
export class ScheduleFilterPage {
  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];

  constructor(
    public confData: ConferenceData,
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) { }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;

    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get('excludedTracks');

    this.confData.getTracks().subscribe((tracks: any[]) => {
      tracks.forEach(track => {
        this.tracks.push({
          name: track.name,
          icon: track.icon,
          isChecked: (excludedTrackNames.indexOf(track.name) === -1)
        });
      });
    });
  }

}
