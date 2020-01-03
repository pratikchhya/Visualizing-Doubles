--Loading Data onto PostGres

-- Drop tables
Drop Table final_beer;
Drop Table beer_consumption;

-- Create final table
create table final_beer(
	index int primary key,
	brewery_name varchar not null,
	city varchar not null,
	state varchar not null,
	beer_name varchar not null,
	style varchar not null,
	latitude float not null,
	longitude float not null,
	rating float not null,
	abv_percent float not null);
	
	
-- Create beer consumption per state table
create table beer_consumption(
	index int primary key,
	state varchar not null,
	consumption_in_gallons float not null,
	state_abbreviation varchar not null);


-- Query to see if Table has any Data
select * from final_beer;
select * from beer_consumption;