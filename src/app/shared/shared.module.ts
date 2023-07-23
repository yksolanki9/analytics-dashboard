import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [CardComponent, StatCardComponent, ChartComponent],
  imports: [CommonModule, MatCardModule, NgChartsModule, MatIconModule],
  exports: [CardComponent, StatCardComponent, ChartComponent],
})
export class SharedModule {}
