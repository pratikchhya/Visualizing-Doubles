# Beertopia

For beer enthusiasts, the craft beer segment of the alcohol and beverages industry has a ton of options. Some of the questions that are relevant for beer enthusiasts are as follows:
- How are craft beers differentiated?
- What are the most common beer styles consumed in the US?
- What are the states with the most craft beer consumption?

To answer these questions, we cleaned our dataset and later built a web application that shows various beer styles, a map showing the state with most beer consumption, a data table, and a map showing brewering ratings.

### Data Sources:
Beers and Breweries 
- 2 datasets from Kaggle were used. One for US craft breweries and another for beers: https://www.kaggle.com/ritesaluja/the-beer/data

Google Places 
- API interactions to retrieve geolocation data and brewery ratings.

Web Scrape 
- Scrape data for beer consumption by state: https://www.thrillist.com/drink/nation/beer-consumption-by-state/3973432

Beer Styles
- The sources to map and define the family tree used were:
  - www.beeradvocate.com
  - www.brewersassociation.org
  - www.beerspot.com
  - www.ratebeer.com

### API Keys Required:
- Google API (console.developers.google.com/getting-started)
- Mapbox API (mapbox.com)

## Technologies used:
```
Python / Pandas
Javascript
PHP - Hypertext Pre-processor
Html
CSS / Bootstrap
```

## Data Clean Up Process:

The dataset had 12 number of columns and 2410 number of rows. Since our dataset was so large, we had to remove unnecessary data by using Pandas. Our final dataset which only consists of breweries located in US resulting in 9 columns and 2255 rows of data.

Open Git bash, activate your python environment and install libraries mentioned below:
 * pandas
 * sqlalchemy
 * psycopg2
 * bs4
 * datetime

Sign up for Google API and acquire key to copy. Create “config.py” file in the root directory and assign Google API key as “gkey” in the config file.

Create 2 Jupyter Notebooks:

1)  Load breweries and beers CSVs into jupyter notebook. Make Google Place API calls for each brewery to extract latitude, longitude, and ratings data. Munge data to create a final DataFrame. Export to CSV for data visualization.

2)  Scrape beer consumption data using BeautifulSoup and import into jupyter notebook. Data munge and format the data into a pandas DataFrame. Export to CSV for data visualization.

## Local Database

PostGres used to store data from Jupyter Notebook. Two tables created :

1)  Table with breweries and beers data from the first notebook.
2)  Table with beer consumption per state from the second notebook


## Data Visualization (JavaScript library used)
#### Beer Style wheel (Plotly Sunburst)
#### Consumption map (Plotly Choropleth)
#### Beer Style Frequency (Anychart Word Cloud)

## Map (D3, Leaflet)
The map shows all the breweries in US from the data we have collected. Due to the large number of records which has resulted the page to load very slowly, we decided to only show the first 1500 records from our data. 

#### Getting Coordinates
The data file only had the list of brewery names, city and state. To map each breweries, we used Google Maps API to get the coordinates.

The map was possible with use of Leaflet Extra Markers and Font Awesome (https://github.com/coryasilva/Leaflet.ExtraMarkers). Clicking on the marker will show the name of the breweries and their respective ratings. The control buttons which are located on the top right corner lets you filter the breweries by their ratings. Breweries with a rating of less than 4 are marked red, between 4.1 to 4.5 are marked blue and greater than 4.5 are marked purple.

![markers_default.png](markers_default.png)

## Data Table 

The data table section (data.html) shows the entire brewery dataset. The records are filterable by 4 fields:

 - Brewery Names
 - State
 - Beer Style
 - Brewery Ratings

Datatable is being displayed by calling a .js file with json entries for each record which was created by running a simple csv to json conversion using python.

```python
import csv
import json

csvfile = open('final_beer.csv', 'r')
jsonfile = open('final_beer.json', 'w')

fieldnames = ("index","brewery_name","city","state","beer_name","style","latitude","longitude","rating","abv_percent")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')
```
The purpose of showing a data table is to have users answer the following questions:
- Which breweries are located near me (or to a particular place)?
- Which beers are produced by these breweries (with ratings and abv info)?
- Which beers have the best rating?

## Heroku Deployment
Heroku is a hosting platform where you can deploy dynamic applications using any of the following web applications: Rails, PHP, Node.js and Python.

#### Pre-requisites
- Have git installed
- Sign up for Heroku Account

#### Deploying Your Site
Navigate to your project in the git bash.
```
cd Final
```
Create an index.php file. The purpose of this file is to trick Heroku to deploy a static site by including 1 dynamic file which it recognizes. In simple terms, you are trying to masquerade the HTML app which you build as a PHP application. Add the following code into the index.php. PHP is one of the most preferred programming language for website development as PHP can be easily embedded into HTML code.
```
<?php header( 'Location: /index.html' ) ;  ?>
```
Open git bash. Run the command one at a time:
```
git init
git add .
```
add . means it will add all the files to the git repository.
Then commit to repo
```
git commit -m "Ready for deployment."
```
Login into Heroku site before you run the next command
```
heroku apps:create my-website-name
```
Insert your desired name instead of my-website-name.
```
git push heroku master
```
You should be able to visit your site at https://my-website-name.herokuapp.com/.
If you need to make changes to your site after deployment, please follow below steps:
After adding the changes to your code. Run the following commands in git bash one at a time.
```
git add .
Save the changes…
git commit -am "updated files"
Then deploy…
git push heroku master
```

## Challenges/Limitations: 
- For Breweries with multiple locations - Google API provided the first address it was able to find even though that might not be the actual one.  
- The rating for individual beers were not available, the indicated rating in datatable is for brewery as a whole. 
- Using multiple data sources
- We had to create a family tree to connect beers and their style. 

## Next Steps:
- Make the application dynamic to make it interactive with users ( i.e users could rate beers or add brewery information)
- Add beer rating information.
- Provide an accurate street address for each brewery.
- Evaluate adding more fun charts.


## Contributors 
 - Sai
 - Dan
 - Deepen
 - Pratikchhya
 - Pavana

### Production Website - https://visualizing-doubles.herokuapp.com/index.html
