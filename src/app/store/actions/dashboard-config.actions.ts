import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { DashboardConfig } from 'src/app/core/models/dashboard-config.model';

export const loadConfig = createAction('[Dashboard] Load Config');

export const loadConfigSuccess = createAction(
  '[Dashboard] Load Config Success',
  props<{ data: DashboardConfig }>()
);

export const loadConfigFailure = createAction(
  '[Dashboard] Load Config Failure',
  props<{ error: HttpErrorResponse }>()
);
