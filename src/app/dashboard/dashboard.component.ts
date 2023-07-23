import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  statsBadges: Array<any>;

  barChartData: ChartData;

  barChartOptions: ChartOptions;

  doughnutChartData: ChartData;

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

    this.statsBadges = [
      {
        title: 'Badge title',
        timeline: 'April - 2023 (Till today)',
        value: 3969,
        percentChange: -11.0,
        previousStat: 'March - 2023: 4459',
      },
      {
        title: 'Badge title',
        timeline: 'April - 2023 (Till today)',
        value: 3969,
        percentChange: -11.0,
        previousStat: 'March - 2023: 4459',
      },
      {
        title: 'Badge title',
        timeline: 'April - 2023 (Till today)',
        value: 3969,
        percentChange: -11.0,
        previousStat: 'March - 2023: 4459',
      },
      {
        title: 'Badge title',
        timeline: 'April - 2023 (Till today)',
        value: 3969,
        percentChange: -11.0,
        previousStat: 'March - 2023: 4459',
      },
      {
        title: 'Badge title',
        timeline: 'April - 2023 (Till today)',
        value: 3969,
        percentChange: -11.0,
        previousStat: 'March - 2023: 4459',
      },
    ];

    this.barChartData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      ],
    };

    this.barChartOptions = {
      responsive: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    this.doughnutChartData = {
      labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
      datasets: [
        {
          data: [300, 500, 100],
        },
      ],
    };
  }
}
