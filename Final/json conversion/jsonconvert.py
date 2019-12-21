import csv
import json

csvfile = open('final_beers_df.csv', 'r')
jsonfile = open('final_beer_json.json', 'w')

fieldnames = ("index","brewery_name","city","state","beer_name","style","ounces","latitude","longitude","rating","abv_percent")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')