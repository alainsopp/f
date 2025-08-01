function plotSankey(month) {
      
  var ctx1 = document.getElementById('sankeyChart').getContext('2d');              
  var output = buildSankeyData(CFG_OPERATION_CUBE,month)        

  EXPENSES_CHART = new Chart(ctx1, {
    type: 'sankey',
    data: {
      datasets: [{
        label: 'Energy Flow',
        data: output.data,
        colorFrom: 'blue',
        colorTo: 'green',
        borderWidth: 1,
        labels: output.labels
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Sankey Diagram'
        }
      }
    }
  });   
};

function plotLinear() {
  var ctx2 = document.getElementById('lineChart').getContext('2d');
  var data = buildLinearData(CFG_ASSETS_CUBE)
  PATRIMONY_CHART = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Sales',
        data: data,
        borderColor: 'rgba(255, 0, 192, 1)',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};