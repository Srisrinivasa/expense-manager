# Expense manager

## Description

An application to manage the expenses.

## Getting Started

### Dependencies

- React
- Redux
- Bootstrap
- Apexcharts
- Webpack, Webpack-dev-server

### Installation

- Run `git clone https://github.com/Srisrinivasa/expense-manager.git`
- Run `cd expense-manager/`
- Run `npm install` or `yarn install`
- Run `npm start` and open `localhost:3000` in browser

## Authors

Sri Sathwik

## Top level directory layout

    .
    ├── config                                  # Configuration files (eg. webpack)
    ├── src                                     # Source files
    │   ├──── app
    │   │     ├──── features
    │   │     │      ├──── core
    │   │     │      │      ├──── actions       # Holds root action creator
    │   │     │      │      ├──── actionTypes   # Holds application action types
    │   │     │      │      ├──── styles        # Styles related to views in this folder
    │   │     │      │      ├──── views         # Core components 
    │   │     │      │      └──── reducers      # Reducers common with in application
    │   │     │      │ 
    │   │     │      ├──── [feature name]
    │   │     │      │     ├──── styles         # Styles related to the feature
    │   │     │      │     ├──── views          # Components related to the feature
    │   │     │      │     └──── index.js       # Feature main file
    │   │     │      │     
    │   │     │      └──── [feature name]
    │   │     │            .
    │   │     │            .
    │   │     │            .
    │   │     │
    │   │     ├──── root                        # Holds application root folders
    │   │     │      ├──── actions              # Root actions
    │   │     │      └──── reducers             # Root reducers
    │   │     │
    │   │     ├──── routes                      # Contains routes
    │   │     └──── store                       # Store to hold application state
    │   │
    │   │     
    │   ├──── index.html                        # Main HTML file
    │   └──── index.js                          # Entry file
    │
    ├── .babelrc
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── yarn.lock