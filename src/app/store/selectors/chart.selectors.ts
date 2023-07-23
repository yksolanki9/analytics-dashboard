import { createSelector } from '@ngrx/store';

export const selectDashboardConfig = (state: {
  dashboardConfig: Array<any>;
}) => {
  return JSON.parse(JSON.stringify(state.dashboardConfig));
};

// Another way to just modify the datasets object
// export const selectDashboardConfig = (state: { dashboardConfig: Array<any> }) =>
//   state.dashboardConfig.map((row) =>
//     row.map((chart: any) => {
//       if (chart.type === 'CHART') {
//         return {
//           ...chart,
//           data: {
//             ...chart.data,
//             chartData: { ...chart.data.chartData },
//           },
//         };
//       }
//       return chart;
//     })
//   );
