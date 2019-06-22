import { GoogleCharts } from 'google-charts';
import { spredSheetUrl } from './asset/spred-sheet'

const charts = () => {
  
  const drawChart = () => {
    // spredSheetUrlはスプレッドシートのURL
    const query = new GoogleCharts.api.visualization.Query(spredSheetUrl);
    query.send(handleQueryResponse);
  };

  const handleQueryResponse = (response) => {
    const target = document.getElementById('target6');
    const options = {
      title: 'My Chart',
      width: 500,
      height: 300
    };

    const data = response.getDataTable();

    const chart = new GoogleCharts.api.visualization.PieChart(target);
    chart.draw(data, options);
  };

  GoogleCharts.load(drawChart);
};

charts();

export default charts;
