import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent {
  //TODO: This data should come from parent component
  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  public doughnutChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  public doughnutChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public doughnutChartLegend = true;
  public doughnutChartPlugins = [];
}
