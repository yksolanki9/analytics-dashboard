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

  chartOptions: ChartOptions;

  doughnutChartData: ChartData;

  cardsLayout$: Observable<any>;

  dashboardConfig: Array<any>;

  private getCardsSize(matches: boolean) {
    if (matches) {
      return {
        COLS: 1,
        ROW_HEIGHT: '100px',
        SM: { COLS: 1, ROWS: 2 },
        MD: { COLS: 1, ROWS: 4 },
        LG: { COLS: 1, ROWS: 3 },
      };
    } else {
      return {
        COLS: 10,
        ROW_HEIGHT: '200px',
        SM: { COLS: 2, ROWS: 1 },
        MD: { COLS: 5, ROWS: 2 },
        LG: { COLS: 10, ROWS: 2 },
      };
    }
  }

  ngOnInit() {
    this.cardsLayout$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => this.getCardsSize(matches)));

    this.cardsLayout$.subscribe((data) => console.log('cela', data));

    this.statsBadges = [
      {
        size: 'SM',
        type: 'STAT_CARD',
        data: {
          title: 'Badge title',
          timeline: 'April - 2023 (Till today)',
          value: 3969,
          percentChange: -11.0,
          previousStat: 'March - 2023: 4459',
        },
      },
      {
        size: 'SM',
        type: 'STAT_CARD',
        data: {
          title: 'Badge title',
          timeline: 'April - 2023 (Till today)',
          value: 3969,
          percentChange: -11.0,
          previousStat: 'March - 2023: 4459',
        },
      },
      {
        size: 'SM',
        type: 'STAT_CARD',
        data: {
          title: 'Badge title',
          timeline: 'April - 2023 (Till today)',
          value: 3969,
          percentChange: -11.0,
          previousStat: 'March - 2023: 4459',
        },
      },
      {
        size: 'SM',
        type: 'STAT_CARD',
        data: {
          title: 'Badge title',
          timeline: 'April - 2023 (Till today)',
          value: 3969,
          percentChange: -11.0,
          previousStat: 'March - 2023: 4459',
        },
      },
      {
        size: 'SM',
        type: 'STAT_CARD',
        data: {
          title: 'Badge title',
          timeline: 'April - 2023 (Till today)',
          value: 3969,
          percentChange: -11.0,
          previousStat: 'March - 2023: 4459',
        },
      },
    ];

    this.barChartData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      ],
    };

    this.chartOptions = {
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

    this.dashboardConfig = [
      this.statsBadges,
      [
        {
          type: 'CHART',
          size: 'MD',
          data: {
            title: 'Chart title',
            chartType: 'doughnut',
            chartData: this.doughnutChartData,
            chartOptions: this.chartOptions,
            chartPlugins: [],
          },
        },
        {
          type: 'CHART',
          size: 'MD',
          data: {
            title: 'Chart 2 title',
            chartType: 'doughnut',
            chartData: this.doughnutChartData,
            chartOptions: this.chartOptions,
            chartPlugins: [],
          },
        },
      ],
      [
        {
          type: 'CHART',
          size: 'LG',
          data: {
            title: 'Chart 3 title',
            chartType: 'bar',
            chartData: this.barChartData,
            chartOptions: this.chartOptions,
            chartPlugins: [],
          },
        },
      ],
    ];
  }
}
