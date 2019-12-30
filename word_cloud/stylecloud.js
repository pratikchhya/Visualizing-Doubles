
// Create word cloud
anychart.onDocumentReady(function() {

     // create a tag (word) cloud chart

    anychart.data.loadCsvFile('stylecloud.csv', function (data) {

      console.log(data);

      var chart = anychart.tagCloud(data);

      // set a chart title
      chart.title('30 Beer style with most beers');


      // set an array of angles at which the words will be laid out
      chart.angles([0]); 
      // // configure angles
      //chart.fromAngle(10);
      //chart.toAngle(100);
      chart.angles([10,-20,-10]);

      chart.hovered().fill("#006600");

      // create and configure a color scale.
      //chart.colorRange(true);
  
  
      // set text spacing
      chart.textSpacing(0.5);

      var tooltip = chart.tooltip();
      // enable HTML for tooltips
      chart.tooltip().useHtml(true);
      // configure tooltips
      var formatter = "No. of beers: {%value}"
     
       var tooltip = chart.tooltip();
       tooltip.format(formatter);

      // display the word cloud chart
      chart.container("container").draw();
  });
});
