import { GoogleCharts } from 'google-charts';

console.log('test!!!')

const charts = () => {
  
  const drawChart = () => {
    const target = document.getElementById('target1');
    console.log('target', target);
    const options = {
      title: 'My Chart',
      width: 500,
      height: 300
    };

    // const chart = new google.visualization.PieChart(target);
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Language', 'Votes'],
      ['PHP', 30],
      ['Ruby', 20],
      ['Python', 10]
    ]);
    // data.addColumn('string', 'Language');
    // data.addColumn('number', 'Votes');
    // data.addRow(['PHP', 30]);
    // data.addRow(['Ruby', 20]);
    // data.addRow(['Python', 10]);
    const chart = new GoogleCharts.api.visualization.PieChart(target);
    chart.draw(data, options);
  };

  GoogleCharts.load(drawChart);
  // google.charts.load('current', { packages: ['corechart'] });
  // google.charts.setOnLoadCallback(drawChart);
};

charts();

export default charts;
