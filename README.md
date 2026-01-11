# ML Scale Project


# Goal of project 
The goal of this project was to build a prediction service for tourism in Sweden. We wanted to create a dashboard where travel agencies, tourism companies and airplane compeanies could use to see how many people where predicted to come and visit stockholm sweden for a specfic date. 

# Solution 
From the beginning we though about doing this with two data sources. The first data source that would be our dependent variable is the number of flights landed at arlanda. This would serve as a proxy variable for our tourism prediction. We used opensky to get 





Trend data.
We used googles api to download the trend data for the search words specified. 

Flight data 
The data comes from OpenSky. We have downloaded data using Trino from Opensky for flight data since 2020-01-01 to 2025-12-28 (total landings per day). We followed these steps to download from opensky using Trino: https://opensky-network.org/data/trino

We will also use opensky to get up to date real time data, using their api service. 


