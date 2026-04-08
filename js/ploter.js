function plotSankey(month) {
      
  var ctx1 = document.getElementById('sankeyChart').getContext('2d');              
  var output = buildSankeyData(CFG_OPERATION_CUBE,CFG_INCOMES_PER_MONTH[month],month)        

  EXPENSES_CHART = new Chart(ctx1, {
    type: 'sankey',
    data: {
      datasets: [{
<<<<<<< HEAD
        label: 'Cash flow',
        color:'white',
=======
        label: 'Energy Flow',
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc
        data: output.data,
        colorFrom: 'blue',
        colorTo: 'lightblue',
        borderWidth: 1,
<<<<<<< HEAD
        labels: output.labels               
      }]
    },
    options: {
      responsive: true     
=======
        labels: output.labels        
      }]
    },
    options: {
      responsive: false      
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc
    }
  });   
};

function plotLinear(lineColor) {
  var ctx2 = document.getElementById('lineChart').getContext('2d');
  var data = buildLinearData(CFG_ASSETS_CUBE)
<<<<<<< HEAD
  const nbYears = data.length % 12
  var labels = CFG_MONTH_LIST_SHORT
  for ( var i = 0; i < nbYears; i++ ) { // Reapeats month on x abscisse as many time as number of year
    yearMonths = CFG_MONTH_LIST_SHORT.map(item => item + " " + i);
    labels = [...labels, ...yearMonths]
  }
  PATRIMONY_CHART = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Patrimony evolution',
=======
  PATRIMONY_CHART = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Sales',
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc
        data: data,
        borderColor: lineColor,
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      plugins:{
        legend:{
          display:false
        }
      },      
      responsive: true,
      scales: {
        y: {
          grid:{
            display:false
          },
          beginAtZero: true
        },
        x: {
          grid:{
            display:false
          }
        }
      }
    }
  });
};

function plotDoughnut(){  
  const ctx3 = document.getElementById('pieChart');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(26, 129, 88, 0.7)',
          'rgba(80, 136, 38, 0.75)',
          'rgba(153, 122, 45, 0.7)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      cutout: '60%' // controls thickness of the ring
    }
  })
}