import { createReducer, on } from '@ngrx/store';
import {
  loadConfigFailure,
  loadConfigSuccess,
} from '../actions/dashboard-config.actions';

const initialState = {
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
