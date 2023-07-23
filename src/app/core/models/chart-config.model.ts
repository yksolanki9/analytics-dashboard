import { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js';

export interface ChartConfig {
  chartData: ChartData;
  chartOptions: ChartOptions;
  chartPlugins: Plugin[];
  chartType: ChartType;
  title: string;
}
