  Chart.defaults.global.defaultFontFamily = 'Roboto';
  Chart.defaults.global.defaultFontColor = '#333';
  
  function makeChart(State) {  
    var stateLabels = State.map(function(d) {return d.State});
    var beerData = State.map(function(d) {return d.Consumption_in_gallons});
  
    var chart = new Chart('chart', {
      type: 'horizontalBar',
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Consumption',
                fontSize: 16
              }
            }
          ]
        }
      },
      data: {
        labels: stateLabels,
        datasets: [
          {
            data: beerData,
            backgroundColor:"RGB(255, 204, 0)"
          }
        ]
      }
    })
  }
  // Request data using D3
d3.csv('beer_consumption_df.csv')
.then(makeChart);
  