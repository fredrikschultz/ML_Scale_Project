## Goal of the Project

The goal of this project was to build a prediction service for tourism in Sweden. The objective was to create a dashboard that travel agencies, tourism companies, and airline companies could use to see how many people are predicted to visit Stockholm, Sweden, on a specific date.

---

## Solution

From the beginning, we planned to use two main data sources. The first data source, which serves as our dependent variable, is the number of flights landing at Arlanda Airport. This metric acts as a proxy for tourism demand. We used data from OpenSky to obtain flight information.

To collect historical flight data, we used OpenSky’s Trino service to download daily flight records from **2019-12-31** up to the present. For ongoing updates, we used the OpenSky API to retrieve daily flight data as part of our feature pipeline.

For predictive features, we initially considered using Google Trends data for search terms such as *“fika”*, *“vikings”*, *“meatballs”*, and other Swedish-related keywords. The idea was that increasing interest in Swedish culture could indicate a rise in tourism and, consequently, in flight arrivals. However, Google Trends proved difficult to use reliably, as it was not robust enough for a daily feature pipeline. As a result, we shifted our focus to calendar- and holiday-based and weather features.

---

## Final Product

The final result is a batch machine learning system that uses calendar and holiday features (such as weekends, public holidays, and day of the year) together with weather data (including snowfall, average rainfall, and average temperature) to predict the number of flights arriving in Sweden on a given day.

The inference pipeline runs automatically every morning at **06:00** using GitHub Actions. The system generates a prediction for the number of flights expected to arrive in Sweden that day and publishes the result on a GitHub Pages website.
