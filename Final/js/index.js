// from data.js
var tableData = dataSet;
console.log(tableData);

var tbody = d3.select("tbody");
console.log(dataSet);

dataSet.forEach(function(breweryData){
    console.log(breweryData);
    var row = tbody.append("tr");
    Object.entries(breweryData).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");
    var inputElement = d3.select("#brewery_name").property("value");
    var cityInput=d3.select("#city").property("value");
    var styleInput=d3.select("#style").property("value");
    var ratingInput=d3.select("#rating").property("value");

    var filterData=tableData;
    if (inputElement){
        filterData = filterData.filter(row => row.brewery_name === inputElement); 
    }
    if (cityInput){
        filterData = filterData.filter(row => row.city === cityInput);       
    }
    if (styleInput){
        filterData = filterData.filter(row => row.style === styleInput);       
    }
    if (ratingInput){
        filterData = filterData.filter(row => row.rating === ratingInput);       
    }
    

    filterData.forEach(function(data){
        var row=tbody.append("tr");
        Object.entries(data).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);
            });
        });
    });