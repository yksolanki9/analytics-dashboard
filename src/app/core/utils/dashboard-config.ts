//Endpoint -> https://my-json-server.typicode.com/yksolanki9/mock-api/data

export const dashboardConfigData = [
  [
    {
      size: 'SM',
      type: 'STAT_CARD',
      data: {
        title: 'Cohort Population',
        timeline: 'April - 2023 (Till today)',
        value: 2500,
        previousStat: 'Total: 2500',
      },
    },
    {
      size: 'SM',
      type: 'STAT_CARD',
      data: {
        title: 'Total ER',
        timeline: 'April - 2023 (Till today)',
        value: 3969,
        percentChange: -11,
        previousStat: 'March - 2023: 4459',
      },
    },
    {
      size: 'SM',
      type: 'STAT_CARD',
      data: {
        title: 'Total Admission',
        timeline: 'April - 2023 (Till today)',
        value: 4179,
        percentChange: -7.4,
        previousStat: 'March - 2023: 4511',
      },
    },
    {
      size: 'SM',
      type: 'STAT_CARD',
      data: {
        title: 'Average Cost',
        timeline: 'April - 2023 (Till today)',
        value: 11.31,
        percentChange: -1.7,
        previousStat: 'March - 2023: 126',
      },
    },
    {
      size: 'SM',
      type: 'STAT_CARD',
      data: {
        title: 'Total visit',
        timeline: 'April - 2023 (Till today)',
        value: 5244,
        percentChange: -9.3,
        previousStat: 'March - 2023: 5779',
      },
    },
  ],
  [
    {
      type: 'CHART',
      size: 'MD',
      data: {
        title: 'Population By Age',
        chartType: 'doughnut',
        chartData: {
          labels: [20, 30, 40, 50, 60],
          datasets: [
            {
              data: [11.4, 22.2, 22.5, 26.8, 17.1],
            },
          ],
        },
        chartOptions: {
          responsive: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
        chartPlugins: [],
      },
    },
    {
      type: 'CHART',
      size: 'MD',
      data: {
        title: 'Population By Location',
        chartType: 'doughnut',
        chartData: {
          labels: [
            'Alabama',
            'Florida',
            'Arizona',
            'Kentucky',
            'California',
            'Colorado',
          ],
          datasets: [
            {
              data: [17.3, 17.7, 16.2, 16.7, 16.2, 15.8],
            },
          ],
        },
        chartOptions: {
          responsive: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
        chartPlugins: [],
      },
    },
  ],
  [
    {
      type: 'CHART',
      size: 'LG',
      data: {
        title: 'AVG Admissions',
        chartType: 'bar',
        chartData: {
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          datasets: [
            {
              data: [65, 59, 80, 81, 56, 55, 40],
              label: 'Male',
            },
            {
              data: [28, 48, 40, 19, 86, 27, 90],
              label: 'Female',
            },
          ],
        },
        chartOptions: {
          responsive: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
        chartPlugins: [],
      },
    },
  ],
];
