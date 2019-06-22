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
      ['Year', '@tom', { role: 'annotation' }, { role: 'certainty' }, '@mike', { role: 'certainty' }],
      ['2015', 50, 'Campaign A', true, 90, true],
      ['2016', 40, null, true, 80, true],
      ['2017', 45, null, true, 90, true],
      ['2018', 60, null, false, 90, false]
    ]);

    const chart = new GoogleCharts.api.visualization.LineChart(target);
    chart.draw(data, options);
  };

  GoogleCharts.load(drawChart);
};

charts();

export default charts;
