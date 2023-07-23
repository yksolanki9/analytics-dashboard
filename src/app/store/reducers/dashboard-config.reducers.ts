import { createReducer, on } from '@ngrx/store';
import {
  loadConfigFailure,
  loadConfigSuccess,
} from '../actions/dashboard-config.actions';
import { DashboardConfig } from 'src/app/core/models/dashboard-config.model';
import { HttpErrorResponse } from '@angular/common/http';

interface DashboardConfigState {
  data: DashboardConfig | null;
  error: HttpErrorResponse | null;
  loading: boolean;
}

const initialState: DashboardConfigState = {
  data: null,
  error: null,
  loading: true,
};

export const dashboardConfigReducer = createReducer(
  initialState,
  on(loadConfigSuccess, (state, { data }) => ({
    ...state,
    data,
    error: null,
    loading: false,
  })),
  on(loadConfigFailure, (state, { error }) => ({
    ...state,
    data: null,
    error,
    loading: false,
  }))
);
