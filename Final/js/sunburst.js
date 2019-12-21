// get the data from CSV
d3.csv("data/beer_styles.csv").then(function(beers) {
    console.log(beers);
  
    // define var STYLE and PARENT
    var styles = beers.map(wheel => wheel.styles);
    //console.log(styles); // just a check for the output
    var parent = beers.map(wheel => wheel.parent);
    //console.log(parent);  // just a check for the output
  
    // Defining the data for the sunburst
    var data = [
      {
        type: "sunburst",
        ids: styles,
        labels: styles,
        parents: parent,
        // values: [10, 14, 12, 10, 4, 6, 6, 4, 4, 3, 5, 6, 7, 6, 5, 4, 3],
        // outsidetextfont: { size: 20, color: "#377eb8" },
        leaf: { opacity: 0.4 },
        marker: { line: { width: 2 } }
      }
    ];
  
    // layout definition
    var layout = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      width: 1000,
      height: 1000
    };
  
    Plotly.newPlot("myDiv", data, layout, { showSendToCloud: true });
  });