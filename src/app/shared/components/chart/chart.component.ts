import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartTypeRegistry, Plugin } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() chartType: keyof ChartTypeRegistry;

  @Input() chartData: ChartData;

  @Input() chartOptions: ChartOptions;

  @Input() chartPlugins: Plugin[];
}
