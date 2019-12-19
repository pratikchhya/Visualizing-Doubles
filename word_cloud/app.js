
// Create word cloud
anychart.onDocumentReady(function() {

     //create a tag (word) cloud chart

    anychart.data.loadCsvFile('clouddata.csv', function (data) {

      console.log(data);
      
   
    var chart = anychart.tagCloud(data);
      // var chart = anychart.tagCloud(data);

      // set a chart title
      chart.title('30 breweries with most beer styles');


      // set an array of angles at which the words will be laid out
      chart.angles([0]);
      
      // create and configure a color scale.
      var customColorScale = anychart.scales.ordinalColor();
      customColorScale.ranges([
          {less: 4.45},
          {from: 4.45, to: 4.55},
          {from: 4.55, to: 4.65},
          {from: 4.65, to: 4.75},
          {greater: 4.75}
      ]);
      customColorScale.colors(["#8E8E8E", "#FAF304", "#FA7404", "#E70300", "#801C01"]);
      // set the color scale as the color scale of the chart
      chart.colorScale(customColorScale);
      // add a color range
      chart.colorRange().enabled(true);


      // set text spacing
      chart.textSpacing(5);


      
       var tooltip = chart.tooltip();

      // enable HTML for tooltips
      chart.tooltip().useHtml(true);
      // configure tooltips
      
      // chart.tooltip().format("{%style}");
      var formatter = "No. of beer style: {%value}<br> Rating: {%category}"
     
       var tooltip = chart.tooltip();
       tooltip.format(formatter);

     
      // display the word cloud chart
      chart.container("container").draw();
  
 
 });
});

