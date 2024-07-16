import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  daysUntilNextPeriod: any;

  constructor(private storage: Storage) {
    this.calculateDaysUntilNextPeriod();
  }

  async calculateDaysUntilNextPeriod() {
    const lastPeriodStart = await this.storage['get']('lastPeriodStart');
    const cycleLength = await this.storage['get']('cycleLength');

    if (lastPeriodStart && cycleLength) {
      const today = new Date();
      const lastPeriodDate = new Date(lastPeriodStart);
      lastPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

      const timeDiff = lastPeriodDate.getTime() - today.getTime();
      this.daysUntilNextPeriod = Math.ceil(timeDiff / (1000 * 3600 * 24));
    } else {
      this.daysUntilNextPeriod = -1; // Handle case when data is not available
    }
  }
}
