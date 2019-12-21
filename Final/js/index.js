// Getting references
var $tbody = document.querySelector("#table-body");

var $breweryInput = document.querySelector("#brewery-input");
var $cityInput = document.querySelector("#city-input");
var $sateInput = document.querySelector("#state-input");
var $abvInput = document.querySelector("#abv-input");
var $ratingInput = document.querySelector("#rating-input");


var $submitButton = document.querySelector("#submit");

// Filtered list
var beerData = dataSet;

// Rendering table
renderTable();

// Function to render table
function renderTable() {

    // Looping through data set
    for (var i = 0; i < beerData.length; i++) {
    
        // Insert a row
        var $row = $tbody.insertRow(i);

        // Get current object & keys
        var currentData = beerData[i];
        var fields = Object.keys(currentData);

        // Insert beerData
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentData[field];
        };
    };
};

// Event listener for submit button
$submitButton.addEventListener("click", filterInput);

// Function to filter brewery
function filterBrewery(data) {
    return data.brewery == $breweryInput.value.trim();
};
// filter for city
function filterCity(data) {
    return data.city == $cityInput.value.trim();
};

// filter for state
function filterState(data) {
    return data.state == $stateInput.value.trim();
};

// Function to filter abv
function filterAbv(data) {
    return data.abv == $abvInput.value.trim();
};

// Function to filter rating
function filterRating(data) {
    return data.rating == $ratingInput.value.trim();
};

// Function to filter input
function filterInput(event) {

    // Prevent default
    event.preventDefault();

    // Reseting data set each time button is clicked
    beerData = dataSet;

    // Filters

    if ($breweryInput.value) {
        beerData = beerData.filter(filterBrewery);
    };

    if ($cityInput.value) {
        beerData = beerData.filter(filterCity);
    };

    if ($stateInput.value) {
        beerData = beerData.filter(filterState);
    };

    if ($abvInput.value) {
        beerData = beerData.filter(filterAbv);
    };

    if ($ratingInput.value) {
        beerData = beerData.filter(filterRating);
    };

    if (!$breweryInput && !$cityInput && !$stateInput && !$abvInput && !$ratingInput) {
        beerData = dataSet;
    };

    // Reset inputs

    $breweryInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $abvInput.value = "";
    $ratingInput.value = "";

    // Re-render table
    $tbody.innerHTML = "";
    renderTable();
};