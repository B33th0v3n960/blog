---
title: "Flight Analyser"
pubDate: 2026-07-02
editDate: 2026-07-02
description: |
    Flight Data Ananlyser, built with Java with Swing UI Library. It reads both
    offline data from csv and aggregate live data from various APIs. Features
    include full-text search, sort by parameters, live map view and animated
    graphs.
image:
  url: "/src/assets/cover-images/flight-analyser.png"
  alt: "Markdown logo"
links:
    repo: "https://github.com/B33th0v3n960/Flight-Analyser"
tags: ["project"]
---
---

> Repo Link: 
>
> [Github Repository](https://github.com/B33th0v3n960/Flight-Analyser)

# About the Application 
The purpose of this project is to create a desktop application that tracks and analyses
flight data relating to commercial flights. In terms of historical flight information, the 
application uses a public data set from the US Bureau of Transportation Statistics. It retrieve
the live data from two APIs. The application processes the data and displays it using
information panels, graphs, statistics and a map view of the flights.

The app has four pages. On the home page you enter an origin, destination and 
dates, and the search page lists matching flights in a paginated list that can 
be sorted by lateness or distance. Each entry expands to show the airline, 
airports, times and a small route map. The graph page turns the same results 
into histograms of lateness and distance (with mean, median, variance and 
standard deviation), a top-ten-airports bar chart, a departure-time pie chart 
and a distance-versus-lateness scatterplot. The map page shows live flights 
moving across the map, and selecting a plane opens its details.

The project is built with Maven and Java Swing. LGoodDatePicker handles date 
selection, JMapViewer renders the maps, GeographicLib calculates geodesic 
distances and routes, Jackson parses the API responses, and DotEnv loads API 
keys from a .env file. Pagination was a deliberate choice, since scrolling 
through thousands of flights in a single panel would be too slow. To run it 
you need a free OpenSky account.
