// get the data from CSV
d3.csv("beer_styles.csv").then(function(beers) {
  console.log(beers);

  // define var STYLE and PARENT
  var styles = beers.map(wheel => wheel.styles);
  console.log(styles); // just a check for the output
  var parent = beers.map(wheel => wheel.parent);
  console.log(parent); // just a check for the output
  var beerColors = beers.map(wheel => wheel.colors);
  console.log(beerColors); // just a check for the output
  var description = beers.map(wheel => wheel.description);
  var ABV = beers.map(wheel => wheel.ABV_RANGE);
  var IBU = beers.map(wheel => wheel.IBU_RANGE);

  // Defining the data for the sunburst
  var data = [
    {
      type: "sunburst",
      ids: styles,
      labels: styles,
      parents: parent,
      hovertext: description,
      meta: ABV,
      customdata: IBU,
      hovertemplate:
        "<b> %{label} </b> <br>" +
        "<b>Parent</b>: %{parent} <br>" +
        "<b>ABV</b>: %{meta} <br>" +
        "<b>IBU</b>: %{customdata}<br>" +
        "<b>Sytle Info: </b> %{hovertext}",
      // fillcolors: beerColors,
      // values: [10, 14, 12, 10, 4, 6, 6, 4, 4, 3, 5, 6, 7, 6, 5, 4, 3],
      leaf: { opacity: 0.5 },
      marker: {
        colors: beerColors,
        line: { width: 2 }
      }
    }
  ];

  // layout definition
  var layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    paper_bgcolor: "rgba(0,0,0,0)",
    width: 800,
    height: 800
  };

  Plotly.newPlot("myDiv", data, layout, { showSendToCloud: true });
  // .on("mouseenter", mouseEnter)
  // .on("mouseleave", mouseLeave);

  // let test = document.getElementById("myDiv");
  // let mouseOV = d3.select("myDiv")
  // on.("mouseover", funtion(){
  //   d3.select(this).transition()

  // var descript =

  // test.addEventListener("mouseover", function(event) {
  //     document.getElementById("Style_Info");

  //     return event

  //   var selector = d3.select("#selDataset");

  //   // Use the list of sample names to populate the select options
  //   d3.json("/names").then(sampleNames => {
  //     sampleNames.forEach(sample => {
  //       selector
  //         .append("option")
  //         .text(sample)
  //         .property("value", sample);
  // let test = d3.select("myDiv");
  // // var square = svg
  // //   .append("rect")
  // //   .attr("height", 100)
  // //   .attr("width", 100)
  // //   .attr("x", 10)
  // //   .attr("y", 10)
  // //   .attr("fill", "green")
  // //   .on("mouseenter", mouseEnter)
  // //   .on("mouseleave", mouseLeave);

  // function mouseEnter() {
  //   data.fillcolors("red");
  //   d3.select("Style_Info").append(description);
  // }

  // function mouseLeave() {
  //   data.fillcolors("blue");
  // }

  var e = document.getElementById("myDiv");
  e.onmouseover = function() {
    document.getElementById("popup").style.display = "block";
  };
  e.onmouseout = function() {
    document.getElementById("popup").style.display = "none";
  };

  // function buildMetadata(styleInfo) {
  //   var hoverOV = d3.select("myDiv");
  //   d3.on(MouseEvent).select(this);
  //     var tbody = d3.select("tbody");

  //     // Use `.html("") to clear any existing metadata
  //     tbody.html("");

  //     var count = 0;
  //     var row = tbody.append("tr");
  //     Object.entries(sample).forEach(([key, value]) => {
  //       // console.log(key, value);
  //       if (count < 6) {
  //         var cell = row.append("td");
  //         cell.text(value);
  //         count += 1;
  //       }
  //     });
  //   });
  // }

  // });
});
