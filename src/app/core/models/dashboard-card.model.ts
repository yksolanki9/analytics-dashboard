export interface DashboardCard<T> {
  size: 'SM' | 'MD' | 'LG';
  type: 'STAT_CARD' | 'CHART';
  data: T;
}
