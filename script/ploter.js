function plotSankey(month) {
      
      var data = [
      { from: 'Budget', to: "Alimentation & restaurants", flow: CFG_OPERATION_CUBE[month][0]},
      { from: 'Budget', to: "Achats & shopping", flow: CFG_OPERATION_CUBE[month][1]},
      { from: 'Budget', to: "Loisirs",          flow: CFG_OPERATION_CUBE[month][2]}, 
      { from: 'Budget', to: "Logement & charges", flow: CFG_OPERATION_CUBE[month][3]}, 
      { from: 'Budget', to: "Sante", flow: CFG_OPERATION_CUBE[month][4]}, 
      { from: 'Budget', to: "Don", flow: CFG_OPERATION_CUBE[month][5]}, 
      { from: 'Budget', to: "Impôts, taxes & frais", flow: CFG_OPERATION_CUBE[month][6]},
      { from: 'Budget', to: "Transports", flow: CFG_OPERATION_CUBE[month][7]},
      { from: 'Budget', to: "Voyages", flow: CFG_OPERATION_CUBE[month][8]},
      { from: 'Budget', to: "Epargne & placements", flow: CFG_OPERATION_CUBE[month][9]},
      { from: 'Budget', to: "Note de frais", flow: CFG_OPERATION_CUBE[month][10] }
    ];
    const ctx = document.getElementById('sankeyChart').getContext('2d');

    // Initial data set
    let dataSet = [
      { from: 'A', to: 'B', flow: 10 },
      { from: 'B', to: 'C', flow: 5 },
      { from: 'A', to: 'C', flow: 2 },
    ];

    let sankeyChart = new Chart(ctx, {
      type: 'sankey',
      data: {
        datasets: [{
          label: 'Energy Flow',
          data: dataSet,
          colorFrom: 'blue',
          colorTo: 'green',
          borderWidth: 1
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

function plotLinear(year) {
  const ctx = document.getElementById('lineChart').getContext('2d');
  lineChart
  lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Sales',
        data: buildLinearData(CFG_ASSETS_CUBE),
        
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

plotSankey(CFG_CURRENT_MONTH)