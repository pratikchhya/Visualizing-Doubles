Plotly.d3.csv('data/beer_consumption_df.csv', function(err, rows){
  function unpack(rows, key) {
return rows.map(function(row) { return row[key]; });
}
var data = [{
type: 'choropleth',
locationmode: 'USA-states',
locations: unpack(rows, 'state'),
z: unpack(rows, 'Consumption_in_gallons'),
text: unpack(rows, 'State'),
colorscale: [
[0, 'rgb(255,256,0)'],
[0.4, 'rgb(255,191,0)'], [0.6, 'rgb(242,142,28)'],
[0.8, 'rgb(165,42,42)'], [1, 'rgb(165,42,42)']
],
colorbar: {
  title: 'Gallons'
},
}];

var layout = {
geo:{
scope: 'usa',
showland: true,
showlakes: true,
lakecolor: 'rgb(255, 255, 255)',
lonaxis: {},
lataxis: {}
}
};
Plotly.plot("chart1", data, layout, {showLink: false});
}); 
