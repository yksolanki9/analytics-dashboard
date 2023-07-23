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
    // TODO: Rename to SM, MD, and so on
    if (matches) {
      return {
        cols: 1,
        rowHeight: '100px',
        statsCard: { cols: 1, rows: 2 },
        doughnutChart: { cols: 1, rows: 4 },
        barChart: { cols: 1, rows: 3 },
      };
    } else {
      return {
        cols: 10,
        rowHeight: '200px',
        statsCard: { cols: 2, rows: 1 },
        doughnutChart: { cols: 5, rows: 2 },
        barChart: { cols: 10, rows: 2 },
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
