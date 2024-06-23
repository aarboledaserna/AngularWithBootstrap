
# AngularWithBoostrap

This project is the combination of angular with bootstrap to show any functionality that can be used in all projects when bootstrap is incorporated.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.
This project was generated with ng new explicationBoostrap --no-standalone


## Appendix

To use bootstrap and font awesome it is necessary to install the following commands within the project (cmd command): 

* npm install bootstrap
* npm install @fortawesome/fontawesome-free 

then in the angular.json file place the following:  

* "node_modules/bootstrap/dist/css/bootstrap.min.css",
* "node_modules/@fortawesome/fontawesome-free/css/all.min.css"



## public test API (https://rickandmortyapi.com/documentation/) 


#### API get type : array with two object

"GET https://rickandmortyapi.com/api/location/3,21"

[
  {
    "id": 3,
    "name": "Citadel of Ricks",
    "type": "Space station",
    "dimension": "unknown",
    "residents": [
      "https://rickandmortyapi.com/api/character/8",
      "https://rickandmortyapi.com/api/character/14",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/location/3",
    "created": "2017-11-10T13:08:13.191Z"
  },
  {
    "id": 21,
    "name": "Testicle Monster Dimension",
    "type": "Dimension",
    "dimension": "Testicle Monster Dimension",
    "residents": [
      "https://rickandmortyapi.com/api/character/7",
      "https://rickandmortyapi.com/api/character/436"
    ],
    "url": "https://rickandmortyapi.com/api/location/21",
    "created": "2017-11-18T19:41:01.605Z"
  }
]


## Authors

- Andrés Felipe Arboleda Serna


## Deployment

ng serve -o


## Documentation

[Documentation](https://linktodocumentation)

