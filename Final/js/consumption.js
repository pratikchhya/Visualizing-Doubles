// Create word cloud
anychart.onDocumentReady(function() {

    // create a tag (word) cloud chart

   anychart.data.loadCsvFile('data/beer_consumption.csv', function (data) {

     var chart = anychart.tagCloud(data);

     // set a chart title
     //chart.title('Beer consumption per state');
     chart.normal().fontWeight(600);
     chart.hovered().fill("#66ff66");


     // set an array of angles at which the words will be laid out
     chart.angles([0]); 
     // // configure angles
     chart.angles([-30,10,-40]);
    
     // set text spacing
     chart.textSpacing(1);

     var tooltip = chart.tooltip();
     // enable HTML for tooltips
     chart.tooltip().useHtml(true);
     // configure tooltips
     var formatter = "Beer consumption: {%value}gallons"
    
      var tooltip = chart.tooltip();
      tooltip.format(formatter);

     // display the word cloud chart
     chart.container("chart1").draw();
 });
});