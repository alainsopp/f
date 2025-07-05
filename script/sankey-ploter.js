function plotSankey () {
  
  anychart.onDocumentReady(function () {
  
    var data = [
      {from: 'Budget', to: "Alimentation & restaurants",  weight: ops_cube[5][0], custom_field: "info 1"},
      {from: 'Budget', to: "Achats & shopping", weight: 1990000, custom_field: "info 2"},
      {from: 'Budget', to: "Loisirs",   weight: 1180000, custom_field: "info 3"},
      {from: 'Budget', to: "Logement & charges",   weight:  990000, custom_field: "info 4"},
      {from: 'Budget', to: "Sante",   weight: 1250000, custom_field: "info 5"},
      {from: 'Budget', to: "Don",  weight:  950000, custom_field: "info 6"},
      {from: 'Budget', to: "Impôts, taxes & frais", weight: 2020000, custom_field: "info 7"},
      {from: 'Budget', to: "Transports",   weight: 1110000, custom_field: "info 8"},
      {from: 'Budget', to: "Voyages",   weight: 1100000, custom_field: "info 9"},
      {from: 'Budget', to: "Epargne & placements",   weight: 1050000, custom_field: "info 10"},
      {from: 'Budget', to: "Note de frais",   weight: 1050000, custom_field: "info 11"}    
    ];

    var chart = anychart.sankey(data);
    chart.nodeWidth("50%");
    chart.node().labels().useHtml(true);
    chart.node().labels().format(function() {
      return "<span style='font-weight:bold'>" + this.name +
             "</span><br>" + Math.round(this.value/100000)/10 + " mln";
    });
    
    chart.flow().labels().format(function() {
      return Math.round(this.value/100000)/10 + " mln";
    });

    chart.node().tooltip().titleFormat(function() {
      return this.name + " (" + Math.round(this.value/100000)/10 +
             " mln)";
    });
    
    chart.node().tooltip().format(function() {

      var incomeText = "";
      var outcomeText = "";

      for (i = 0; i < this.income.length; i++) {
        incomeText += Math.round(this.income[i].value/100000)/10 +
                      " mln <- " + this.income[i].name + "\n";
      }

      for (i = 0; i < this.outcome.length; i++) {
        outcomeText += Math.round(this.outcome[i].value/100000)/10 +
                       " mln -> " + this.outcome[i].name + "\n";
      }

      if (this.outcome.length > 0) { incomeText = incomeText + "\n"; }      
      return incomeText + outcomeText;
    });

    
    chart.flow().tooltip().format(function() {
      return Math.round(this.value/100000)/10 + " mln" + 
      "\n\n" + this.getData("custom_field");
    });

    //chart.title("Sankey Diagram: Labels and Tooltips (Formatting Functions)");
    
    chart.container("sankey-chart");
    chart.draw();
  })
}

plotSankey()