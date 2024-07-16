import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent implements OnInit {
  averageCycleLength: any;
  averagePeriodDuration: any;
  public doughnutChartLabels: string[] = ['Cramps', 'Headaches', 'Mood Swings'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [30, 20, 50] }] // Example data
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    const userInfo = await this.storage['get']('userInfo');
    if (userInfo) {
      this.averageCycleLength = userInfo.cycleLength;
      this.averagePeriodDuration = userInfo.periodDuration;
    }

    // Example of loading symptoms pattern data
    const symptomsPattern = await this.storage['get']('symptomsPattern') || { cramps: 0, headaches: 0, moodSwings: 0 };
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: [symptomsPattern.cramps, symptomsPattern.headaches, symptomsPattern.moodSwings] }]
    };
  }

}
