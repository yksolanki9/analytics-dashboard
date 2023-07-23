import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadConfig,
  loadConfigFailure,
  loadConfigSuccess,
} from '../actions/dashboard-config.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { DashboardConfigService } from 'src/app/core/services/dashboard-config.service';

@Injectable()
export class DashboardConfigEffects {
  loadConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadConfig),
      switchMap(() =>
        this.dashboardConfigService.getConfig().pipe(
          map((data) => loadConfigSuccess({ data })),
          catchError((error) => of(loadConfigFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dashboardConfigService: DashboardConfigService
  ) {}
}
