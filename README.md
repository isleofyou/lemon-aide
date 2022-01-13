# [Lemon Aide](https://blooming-inlet-69061.herokuapp.com/)

[Lemon Aide](https://blooming-inlet-69061.herokuapp.com/) is an application that allows users to view Lululemon products, save products to a list of favorites, and create outfits.

## Table of Contents
  - [Setup](#setup)  
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges](#challenges)
  - [Project Specs](#project-specs)

  ## Setup
  - Download the [Lemon Aide API](https://github.com/isleofyou/lemon-aide-api) and follow its readme
  - clone this repo: [here](https://github.com/isleofyou/lemon-aide)
  - `cd lemon-aide`
  - `npm install`
  - `npm start`

  ## Project Specs
  - The project spec & rubric can be found [here.](https://frontend.turing.edu/projects/module-3/stretch.html) The MVP chosen for this project was "building a backend."

## Abstract

![Screen Shot 2022-01-12 at 5 37 15 PM](https://user-images.githubusercontent.com/60856601/149245083-87c2126b-65a7-4494-998e-0aa566575f1a.png)


  This application's design is rooted in a need for outfit planning. Lemon Aide allows a user to see all of their pieces of clothing,plan outfits and favorite items. The inventory is loaded from a server and changes made on the front end are mirrored on the back end. 

![Screen Shot 2022-01-12 at 5 39 17 PM](https://user-images.githubusercontent.com/60856601/149245349-77805417-42d3-4c52-b05c-4bc775242b46.png)

  The item cards that show by default will have options to select as a piece to build an outfit and also have a heart to serve out the favorite functionality. The nav bar on the side is hidden by default, and a user can click on the hamburger to show multiple options to navigate throughout. These options include the home page, favorites, and created outfits. 

![Screen Shot 2022-01-12 at 5 39 28 PM](https://user-images.githubusercontent.com/60856601/149245282-ecbea273-4128-49c7-8c7c-97b3d8b733ac.png)

  A footer provides the user with information about the application's contributors along with their LinkedIn and Github profiles.

  The goal of the project was an introduction into building a back end server. We utilized new technologies and learned the intricacies of building a server out from scratch. 

## Architecture
  Lemon Aide pulls data from a server that was hand rolled with products from Lululemon. These items are retrieved from the server then added to the main file, App.js, via state. Components then are show / hidden via states changing. 

## Technologies 
  - React
  - Postgres
  - Knex
  - HTML
  - CSS
  - JavaScript
  - Cypress
  - Git Version Control / GitHub

## Contributors
  - [Ivonne Hernandez](https://github.com/ivonne-hernandez)
  - [David Tran](https://github.com/isleofyou)
  - [Markus Rossio](https://github.com/Markus-Xavier)

## Wins

-Successfully being able to divide and conquer tasks and complete them in a timely manner.

-Having at least two people pair and walk through a PR, request changes and gracefully making changes before the branch was merged to main.

-Learning CSS tricks, useState, and different ways of doing things from each other’s work.

-Our “your win is my win” attitude really guided us through many hiccups and disagreements.

## Challenges

-Accidentally committing node modules and branching off of that branch caused them to persist until we created a git ignore file and removed them from every branch that was being merged. Unfortunately this skewed our contributions for lines of code that were written and deleted but the number of commits accurately depict that metric.

-Accidentally committing node modules and removing them also caused one of our 3 group members to be on a different version of node which became an issue when attempting to run our Cypress tests. Fortunately this was fixed by having her uninstall and reinstall the correct version of node.

-Eight day time-frame to learn about and implement a backend server, database and frontend application with 2 features.

-Having so many modes of communication made it difficult for some of our team members to understand and remember what they were supposed to be working on. Luckily GH issues became a much better place to draw out, reference and delegate tasks.
