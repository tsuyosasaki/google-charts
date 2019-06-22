import { GoogleCharts } from 'google-charts';

console.log('test!!!')

const charts = () => {
  
  const drawChart = () => {
    const target = document.getElementById('target5');
    console.log('target', target);
    const options = {
      title: 'My Chart',
      width: 500,
      height: 300,
      hAxis: { title: 'Year' },
      vAxis: { title: 'Sales' },
      curveType: 'function',
      pointSize: 10,
      pointShape: 'square'
    };

    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Year', '@tom', '@mike'],
      ['2015', 50, 90],
      ['2016', 40, 80],
      ['2017', 45, 90],
      ['2018', 60, 90]
    ]);

    const chart = new GoogleCharts.api.visualization.LineChart(target);
    chart.draw(data, options);
  };

  GoogleCharts.load(drawChart);
};

charts();

export default charts;
