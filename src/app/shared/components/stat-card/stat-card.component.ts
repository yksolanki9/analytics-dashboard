import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() timeline: string;

  @Input() value: number;

  @Input() percentChange: number;

  @Input() previousStat: string;
}
