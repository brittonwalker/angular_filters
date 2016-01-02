var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http) {

  $scope.characters = [
    {
      "name":"Rick Sanchez",
      "shortname":"Rick_Sanchez",
      "occupation":"Scientist",
      "netWorth": 3000
    },
    {
      "name":"Mortimer 'Morty' Smith",
      "shortname":"Morty",
      "occupation":"Student",
      "netWorth": 100
    },
    {
      "name":"Summer Smith",
      "shortname":"Summer",
      "occupation":"Student",
      "netWorth": 16
    },
    {
      "name":"Bird Person",
      "shortname":"Bird_Person",
      "occupation":"Activist",
      "netWorth": 10000.53
    },
    {
      "name":"Jerry Smith",
      "shortname":"Jerry",
      "occupation":"Unemployed",
      "netWorth": 0
    },
    {
      "name":"Beth Smith",
      "shortname":"Beth",
      "occupation":"Horse Surgeon",
      "netWorth": 65000
    },
    {
      "name":"Mr. Goldenfold",
      "shortname":"Goldenfold",
      "occupation":"Teacher",
      "netWorth": 35000
    },
    {
      "name":"Tiny Rick",
      "shortname":"Tiny_Rick",
      "occupation":"Scientist",
      "netWorth": 3000
    },
    {
      "name":"Krombopulos Michael",
      "shortname":"K",
      "occupation":"Assassin",
      "netWorth": 20000000
    },
    {
      "name":"Mr. Poopybutthole",
      "shortname":"Mr_Poopybutthole",
      "occupation":"Unknown",
      "netWorth": 0
    }
  ]
});
