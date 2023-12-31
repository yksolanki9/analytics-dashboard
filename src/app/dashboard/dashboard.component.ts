import { Component, OnDestroy, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadConfig } from '../store/actions/dashboard-config.actions';
import { DashboardConfig } from '../core/models/dashboard-config.model';
import { HttpErrorResponse } from '@angular/common/http';
import { GridConfig } from '../core/models/grid-config.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  componentDestroyed$ = new Subject();

  dashboardConfig$: Observable<{
    data: DashboardConfig;
    error: HttpErrorResponse;
    loading: boolean;
  }>;

  gridConfig$: Observable<GridConfig>;

  title: string;

  searchQuery: string = '';

  constructor(
    private store: Store<{ dashboardConfig: { data: DashboardConfig } }>,
    private breakpointObserver: BreakpointObserver
  ) {}

  private getCardsSize(matches: boolean): GridConfig {
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
    this.store.dispatch(loadConfig());
    this.gridConfig$ = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(
        takeUntil(this.componentDestroyed$),
        map(({ matches }) => this.getCardsSize(matches))
      );
    this.dashboardConfig$ = this.store.select((state) =>
      JSON.parse(JSON.stringify(state.dashboardConfig))
    );
    this.title = 'Admin Dashboard';
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }
}
