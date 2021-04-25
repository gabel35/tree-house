# Project_3

# TREEHOUSE_app

The TREEHOUSE app allows users to connect in a safer way with people in their apartment buildings/complex//neighborhood.


Deployed at: [Vireo on Heroku](https://tree-house-app.herokuapp.com/)

Repo: [Github Repo for Vireo](https://github.com/gabel35/tree-house)

# Description

Vireo was created to provide information for users upon request to manage and prepare for their next trip. Users can get a descrpition of a country like the Key Phrases in native language, currency, 5 top restaurants, museums, Sightseeing Spots,Fun fact and travel restrictions during COVID-19(future development). Users can also create a post about their recent trip and read other users posts.
<br />
When users access the app, they should choose a country on the main page. After choosing a country, they will be given all the information. If users create a new author, they can create a post, navigate to the post page, see their posts and from other users. The post can be updated or deleted.

## Table of Contents

- [User-Story](#User-Story)
- [Functionality](#Functionality)
- [Installation](#Installation)
- [Usage](#usage)
- [Screenshots](#Screenshots)
- [APIs](#APIs)
- [Division](#Division)

# User-Story
<br />
GIVEN that I would like to meet new people in my neighborhood.
<br />
AS a user who just moved to a new city/neighborhood I want to connect with new people and make new friends.
<br />
I WANT to connect with people with similar interests and/or needs. 
<br />
SO THAT I can make posts about upcoming events, asking for a favor or offering my help.
<br />

# Functionality

WHEN I open the App I can create a new account
<br />
THEN I am given a promt to provide information about myself to verify I am a resident <br />
WHEN I log in using my email and password
<br />
THEN I am redirected to my profile page.
<br />

WHEN I select a button to navigate to blog <br />
THEN I am given an option to create a new author and post my thoughts about recent trip.<br />
WHEN I want to edit or delete my post I can do it from the authors table.

## Installation

1. Clone the repo and run `npm install` for the required dependencies. Run `npm start seed` in order to seed the database.

## Usage

Application will be invoked by using the `node server.js` command in the terminal. Open `https://localhost:8080` in your browser.

# Screenshots

![Vireo](./public/assets/img/vireo_screenshot.PNG)

# Packages, APIs, and Technologies:

For this project we used:

- Sequalize
- MySQL
- express
- express-handlebars

- Bootstrap
- FontAwesome
- Google Fonts

# APIs:

[restcountries](https://restcountries.eu/#api-endpoints-language) (for currency)
[TravelAdvice API](https://traveladviceapi.com/) (for travel restrictions)

# Division:

- Jonathan - Back-end - @jongomezdev
- Gabriel - Back & Front-end - @Gabel35
- Kristina- Front-end and Presentation- @kiankovskaia
