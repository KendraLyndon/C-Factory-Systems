var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/about', {
      templateUrl: 'partials/about.html'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
    .when('/faqs', {
      templateUrl: 'partials/faqs.html'
    })
    .when('/magic', {
      templateUrl: 'partials/magic.html'
    })
    .when('/partners', {
      templateUrl: 'partials/partners.html'
    })
    .when('/products', {
      templateUrl: 'partials/products.html'
    })
    .when('/shop', {
      templateUrl: 'partials/shop.html'
    });

  $locationProvider.html5Mode(true);
});
