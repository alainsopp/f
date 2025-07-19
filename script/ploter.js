function plotSankey(month) {

  anychart.onDocumentReady(function () {

    var data = [
      { from: 'Budget', to: "Alimentation & restaurants", weight: CFG_OPERATION_CUBE[month][0], custom_field: "info 1" },
      { from: 'Budget', to: "Achats & shopping", weight: CFG_OPERATION_CUBE[month][1], custom_field: "info 2" },
      { from: 'Budget', to: "Loisirs", weight: CFG_OPERATION_CUBE[month][2], custom_field: "info 3" },
      { from: 'Budget', to: "Logement & charges", weight: CFG_OPERATION_CUBE[month][3], custom_field: "info 4" },
      { from: 'Budget', to: "Sante", weight: CFG_OPERATION_CUBE[month][4], custom_field: "info 5" },
      { from: 'Budget', to: "Don", weight: CFG_OPERATION_CUBE[month][5], custom_field: "info 6" },
      { from: 'Budget', to: "Impôts, taxes & frais", weight: CFG_OPERATION_CUBE[month][6], custom_field: "info 7" },
      { from: 'Budget', to: "Transports", weight: CFG_OPERATION_CUBE[month][7], custom_field: "info 8" },
      { from: 'Budget', to: "Voyages", weight: CFG_OPERATION_CUBE[month][8], custom_field: "info 9" },
      { from: 'Budget', to: "Epargne & placements", weight: CFG_OPERATION_CUBE[month][9], custom_field: "info 10" },
      { from: 'Budget', to: "Note de frais", weight: CFG_OPERATION_CUBE[month][10], custom_field: "info 11" }
    ];

    var chart = anychart.sankey(data);
    chart.nodeWidth("50%");
    chart.node().labels().useHtml(true);
    chart.node().labels().format(function () {
      return "<span style='font-weight:bold'>" + this.name +
        "</span><br>" + Math.round(this.value);
    });

    chart.flow().labels().format(function () {
      return Math.round(this.value);
    });

    chart.node().tooltip().titleFormat(function () {
      return this.name + " (" + Math.round(this.value);
    });

    chart.node().tooltip().format(function () {

      var incomeText = "";
      var outcomeText = "";

      for (i = 0; i < this.income.length; i++) {
        incomeText += Math.round(this.income[i].value / 100000) / 10 +
          " mln <- " + this.income[i].name + "\n";
      }

      for (i = 0; i < this.outcome.length; i++) {
        outcomeText += Math.round(this.outcome[i].value / 100000) / 10 +
          " mln -> " + this.outcome[i].name + "\n";
      }

      if (this.outcome.length > 0) { incomeText = incomeText + "\n"; }
      return incomeText + outcomeText;
    });

    chart.flow().tooltip().format(function () {
      return Math.round(this.value / 100000) / 10 + " mln" +
        "\n\n" + this.getData("custom_field");
    });

    chart.container("sankey-chart");
    chart.draw();
  })
}

function plotLinear(month) {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
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
}

plotSankey(CFG_CURRENT_MONTH)