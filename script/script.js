anychart.onDocumentReady(function () {
    var data = [
      {from: 'Wages', to: 'Budget', value: 190},
      {from: 'Reimboursments', to: 'Budget', value: 15},      
      {from: 'Budget', to: 'Food & restaurants', value: ops_cube[0][0]},      
      {from: 'Budget', to: 'Purchases', value: ops_cube[0][1]},
      {from: 'Budget', to: 'Hobbies', value: ops_cube[0][2]},
      {from: 'Budget', to: 'Housing and charges', value: ops_cube[0][3]},
      {from: 'Budget', to: 'Health', value: ops_cube[0][4]},
      {from: 'Budget', to: 'Donation', value: ops_cube[0][5]},
      {from: 'Budget', to: 'Taxes & fees', value: ops_cube[0][6]},
      {from: 'Budget', to: 'Transportation', value: ops_cube[0][7]},
      {from: 'Budget', to: 'Travel', value: ops_cube[0][8]},
      {from: 'Budget', to: 'Savings & investments', value: ops_cube[0][9]}      
    ];

    var data = [
      //{from: 'Wages', to: 'Budget', value: 190},
      //{from: 'Reimboursments', to: 'Budget', value: 15},      
      {from: 'Budget', to: 'Alimentation & restaurants', value: ops_cube[0][0]},      
      {from: 'Budget', to: 'Achats & shopping', value: ops_cube[0][1]},
      {from: 'Budget', to: 'Loisirs', value: ops_cube[0][2]},
      {from: 'Budget', to: 'Logement & charges', value: ops_cube[0][3]},
      {from: 'Budget', to: 'Sante', value: ops_cube[0][4]},
      {from: 'Budget', to: 'Don', value: ops_cube[0][5]},
      {from: 'Budget', to: 'Impôts, taxes & frais', value: ops_cube[0][6]},      
      {from: 'Budget', to: 'Transports', value: ops_cube[0][7]},
      {from: 'Budget', to: 'Voyages', value: ops_cube[0][8]},
      {from: 'Budget', to: 'Epargne & placements', value: ops_cube[0][9]}
    ];

    // create a sankey diagram instance
    var chart = anychart.sankey();

    // load the data to the sankey diagram instance
    chart.data(data);

    // set the chart's padding
    chart.padding(20, 40);

    // configure a custom color palette
    chart.palette([
      '#f5dc50',
      '#e1a03c',
      '#c87d5a',
      '#fff0c8',
      '#aa96b4',
      '#6e5a7d',
      '#e19196',
      '#419bd2',
      '#46afaa',
      '#5a5050'
    ]);
        
    
    chart.nodePadding(30);    
    chart.node().normal().labels().fontSize(9);
    chart.node().labels().useHtml(true);    
    chart
      .node()
      .labels()
      .format('<span style="font-weight:bold">{%name}</span> {%value}');

    // customize the links
    chart.flow({
      normal: {
        fill: function () {
          return anychart.color.lighten(this.sourceColor, 0.5) + ' ' + 0.3;
        }
      },
      hovered: {
        fill: function () {
          return this.sourceColor + ' ' + 0.8;
        }
      }
    });    

    var background = chart.background();
        background.fill({
        // set colors position
        keys: ["#000"]
    });

    // set the chart container id
    chart.container('sankey-chart');

    // draw the chart
    chart.draw();

  });