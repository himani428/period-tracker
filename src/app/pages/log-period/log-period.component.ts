import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-log-period',
  templateUrl: './log-period.component.html',
  styleUrls: ['./log-period.component.scss'],
})
export class LogPeriodComponent {
  startDate: any;
  endDate: any;

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    await this.storage.create(); // Initialize storage
  }

  async logPeriod() {
    const period = { startDate: this.startDate, endDate: this.endDate };
    let periods = await this.storage.get('periods') || [];
    periods.push(period);
    await this.storage.set('periods', periods);
    this.router.navigate(['/home']);
  }
}
