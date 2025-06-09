anychart.onDocumentReady(function () {
    // add data
    var data = [

      {from: 'Wages', to: 'Budget', value: 190},
      {from: 'Reimboursments', to: 'Budget', value: 15},
      {from: 'Money transfer inflow', to: 'Budget', value: 15},
      {from: 'Budget', to: 'Food & restaurants', value: 6},      
      {from: 'Budget', to: 'Purchases', value: 2},
      {from: 'Budget', to: 'Hobbies', value: 7},
      {from: 'Budget', to: 'Housing and charges', value: 0},
      {from: 'Budget', to: 'Health', value: 31},
      {from: 'Budget', to: 'Donation', value: 26},
      {from: 'Budget', to: 'Taxes & fees', value: 62},
      {from: 'Budget', to: 'Transportation', value: 5},
      {from: 'Budget', to: 'Travel', value: 4},
      {from: 'Budget', to: 'Savings & investments', value: 6},
      {from: 'Budget', to: 'Money transfer outflow', value: 42}      
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

    // customize the nodes:
    // set the width
    chart.nodeWidth('30%');
    // set the padding
    chart.nodePadding(30);
    // customize the labels
    chart.node().normal().labels().fontSize(9);
    chart.node().labels().useHtml(true);
    chart
      .node()
      .labels()
      .format('<span style="font-weight:bold">{%name}</span><br>{%value}');

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