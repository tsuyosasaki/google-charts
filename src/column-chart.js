import { GoogleCharts } from 'google-charts';

console.log('test!!!')

const charts = () => {
  
  const drawChart = () => {
    const target = document.getElementById('target4');
    console.log('target', target);
    const options = {
      title: 'My Chart',
      width: 500,
      height: 300,
      animation: {
        startup: true,
        duration: 800,
        easeing: 'inAndOut'
      },
      isStacked: 'percent'
    };

    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Team', 'Item-1', 'Item-2'],
      ['Team A', 12, 38],
      ['Team B', 42, 18],
      ['Team C', 11, 58]
    ]);

    const chart = new GoogleCharts.api.visualization.ColumnChart(target);
    chart.draw(data, options);
  };

  GoogleCharts.load(drawChart);
};

charts();

export default charts;
