import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CardComponent, DoughnutChartComponent],
  imports: [CommonModule, MatCardModule, NgChartsModule],
  exports: [CardComponent, DoughnutChartComponent],
})
export class SharedModule {}
