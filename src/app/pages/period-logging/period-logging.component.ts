import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-period-logging',
  templateUrl: './period-logging.component.html',
  styleUrls: ['./period-logging.component.scss'],
})
export class PeriodLoggingComponent implements OnInit {

  period = {
    startDate: '',
    endDate: ''
  };
  startDate: any;
  endDate: any;

  constructor(private navCtrl: NavController, private storage: Storage, private router: Router) {}

  async ngOnInit() {
    await this.storage.create(); // Initialize storage
  }

  async finish() {
    const period = { startDate: this.startDate, endDate: this.endDate };
    let periods = await this.storage.get('periods') || [];
    periods.push(period);
    await this.storage.set('periods', periods);
    this.router.navigate(['/home']);

  }
}
