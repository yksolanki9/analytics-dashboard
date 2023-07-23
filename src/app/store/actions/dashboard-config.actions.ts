import { createAction, props } from '@ngrx/store';

export const loadConfig = createAction('[Dashboard] Load Config');

export const loadConfigSuccess = createAction(
  '[Dashboard] Load Config Success',
  props<{ data: any }>()
);

export const loadConfigFailure = createAction(
  '[Dashboard] Load Config Failure',
  props<{ error: any }>()
);
