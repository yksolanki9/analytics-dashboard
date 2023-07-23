import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    CardComponent,
    DoughnutChartComponent,
    BarChartComponent,
    StatCardComponent,
    ChartComponent,
  ],
  imports: [CommonModule, MatCardModule, NgChartsModule, MatIconModule],
  exports: [
    CardComponent,
    DoughnutChartComponent,
    BarChartComponent,
    StatCardComponent,
    ChartComponent,
  ],
})
export class SharedModule {}
