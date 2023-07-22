import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardComponent,
    DoughnutChartComponent,
    BarChartComponent,
    StatCardComponent,
  ],
  imports: [CommonModule, MatCardModule, NgChartsModule, MatIconModule],
  exports: [
    CardComponent,
    DoughnutChartComponent,
    BarChartComponent,
    StatCardComponent,
  ],
})
export class SharedModule {}
