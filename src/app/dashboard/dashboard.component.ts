import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  cardsLayout$: Observable<any>;

  private getCardsLayout(matches: boolean) {
    if (matches) {
      return {
        cols: 1,
        statsCard: { cols: 1, rows: 1 },
        pieChart: { cols: 1, rows: 1 },
        barChart: { cols: 1, rows: 1 },
      };
    } else {
      return {
        cols: 10,
        statsCard: { cols: 2, rows: 1 },
        pieChart: { cols: 5, rows: 1 },
        barChart: { cols: 10, rows: 1 },
      };
    }
  }

  ngOnInit() {
    this.cardsLayout$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => this.getCardsLayout(matches)));

    this.cardsLayout$.subscribe((data) => console.log('cela', data));
  }
}
