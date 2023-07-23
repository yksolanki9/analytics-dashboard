const statsBadges = [
  {
    size: 'SM',
    type: 'STAT_CARD',
    data: {
      title: 'Badge title',
      timeline: 'April - 2023 (Till today)',
      value: 3969,
      percentChange: -11.0,
      previousStat: 'March - 2023: 4459',
    },
  },
  {
    size: 'SM',
    type: 'STAT_CARD',
    data: {
      title: 'Badge title',
      timeline: 'April - 2023 (Till today)',
      value: 3969,
      percentChange: -11.0,
      previousStat: 'March - 2023: 4459',
    },
  },
  {
    size: 'SM',
    type: 'STAT_CARD',
    data: {
      title: 'Badge title',
      timeline: 'April - 2023 (Till today)',
      value: 3969,
      percentChange: -11.0,
      previousStat: 'March - 2023: 4459',
    },
  },
  {
    size: 'SM',
    type: 'STAT_CARD',
    data: {
      title: 'Badge title',
      timeline: 'April - 2023 (Till today)',
      value: 3969,
      percentChange: -11.0,
      previousStat: 'March - 2023: 4459',
    },
  },
  {
    size: 'SM',
    type: 'STAT_CARD',
    data: {
      title: 'Badge title',
      timeline: 'April - 2023 (Till today)',
      value: 3969,
      percentChange: -11.0,
      previousStat: 'March - 2023: 4459',
    },
  },
];

const barChartData = {
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  datasets: [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ],
};

const doughnutChartData = {
  labels: ['Type A', 'Type B', 'Type C'],
  datasets: [
    {
      data: [300, 500, 100],
    },
  ],
};

const chartOptions = {
  responsive: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export const dashboardConfigData = [
  statsBadges,
  [
    {
      type: 'CHART',
      size: 'MD',
      data: {
        title: 'Chart title',
        chartType: 'doughnut',
        chartData: doughnutChartData,
        chartOptions: chartOptions,
        chartPlugins: [],
      },
    },
    {
      type: 'CHART',
      size: 'MD',
      data: {
        title: 'Chart 2 title',
        chartType: 'doughnut',
        chartData: doughnutChartData,
        chartOptions: chartOptions,
        chartPlugins: [],
      },
    },
  ],
  [
    {
      type: 'CHART',
      size: 'LG',
      data: {
        title: 'Chart 3 title',
        chartType: 'bar',
        chartData: barChartData,
        chartOptions: chartOptions,
        chartPlugins: [],
      },
    },
  ],
];
