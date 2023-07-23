import { Action, createReducer, on } from '@ngrx/store';
import { dashboardConfig } from '../actions/chart.actions';
import { dashboardConfigData } from 'src/app/core/utils/dashboard-config';

const initialState: any[] = [];

export const chartReducer = createReducer(
  dashboardConfigData,
  on(dashboardConfig, (state, action) => dashboardConfigData)
);
