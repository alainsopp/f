anychart.onDocumentReady(function () {
    // add data
    var data = [
      {from: 'First Class', to: 'Child', value: 6},
      {from: 'Second Class', to: 'Child', value: 24},
      {from: 'Third Class', to: 'Child', value: 79},
      {from: 'Crew', to: 'Child', value: 0},
      {from: 'First Class', to: 'Adult', value: 319},
      {from: 'Second Class', to: 'Adult', value: 261},
      {from: 'Third Class', to: 'Adult', value: 627},
      {from: 'Crew', to: 'Adult', value: 50},
      {from: 'Child', to: 'Female', value: 45},
      {from: 'Child', to: 'Male', value: 64},
      {from: 'Adult', to: 'Female', value: 425},
      {from: 'Adult', to: 'Male', value: 1667},
      {from: 'Female', to: 'Survived', value: 344},
      {from: 'Female', to: 'Perished', value: 126},
      {from: 'Male', to: 'Survived', value: 367},
      {from: 'Male', to: 'Perished', value: 1364}
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
    chart.nodeWidth('40%');
    // set the padding
    chart.nodePadding(30);
    // customize the labels
    chart.node().normal().labels().fontSize(14);
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

    // add a title and customize it
    chart
      .title()
      .enabled(true)
      .useHtml(true)
      .text(
        '<span style = "color: #2b2b2b; font-size:20px;">Titanic Survivors</span>' +
        '<br/><span style="color:#00bfa5; font-size: 16px;">(by gender, age, ticket class)</span>'
      );

    // set the chart container id
    chart.container('sankey-chart');

    // draw the chart
    chart.draw();

  });