import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from './components/chart/chart.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';

@NgModule({
  declarations: [
    CardComponent,
    StatCardComponent,
    ChartComponent,
    HighlightTextDirective,
  ],
  imports: [CommonModule, MatCardModule, NgChartsModule, MatIconModule],
  exports: [
    CardComponent,
    StatCardComponent,
    ChartComponent,
    HighlightTextDirective,
  ],
})
export class SharedModule {}
