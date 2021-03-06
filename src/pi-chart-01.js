import { GoogleCharts } from 'google-charts';

const charts = () => {
  
  const drawChart = () => {
    const target = document.getElementById('target1');
    const options = {
      title: 'My Chart',
      width: 500,
      height: 300
    };

    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Language', 'Votes'],
      ['PHP', 30],
      ['Ruby', 20],
      ['Python', 10]
    ]);
    const chart = new GoogleCharts.api.visualization.PieChart(target);
    chart.draw(data, options);
  };

  GoogleCharts.load(drawChart);
};

charts();

export default charts;
