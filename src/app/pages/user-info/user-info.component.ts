import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent{
  username: any;

  userInfo = {
    name: '',
    age: null,
    cycleLength: null
  };

  constructor(private navCtrl: NavController, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create(); // Initialize storage
  }

  async next() {
    // Save user info to storage or state
    await this.storage.set('username', this.username);
    this.navCtrl.navigateForward('/period-logging');
  }
}
