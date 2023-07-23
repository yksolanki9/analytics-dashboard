import { ChartConfig } from './chart-config.model';
import { DashboardCard } from './dashboard-card.model';
import { StatsConfig } from './stats-config.model';

export type DashboardConfig = Array<
  Array<DashboardCard<ChartConfig | StatsConfig>>
>;
