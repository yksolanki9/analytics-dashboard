import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [CardComponent, DoughnutChartComponent, BarChartComponent],
  imports: [CommonModule, MatCardModule, NgChartsModule],
  exports: [CardComponent, DoughnutChartComponent, BarChartComponent],
})
export class SharedModule {}
