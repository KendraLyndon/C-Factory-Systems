var app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    // .when('/about', {
    //   templateUrl: 'partials/about.html',
    //   controller: 'AboutController'
    // })
    // .when('/contact', {
    //   templateUrl: 'partials/contact.html'
    // })
    .when('/faqs', {
      templateUrl: 'partials/faqs.html'
    })
    // .when('/magic', {
    //   templateUrl: 'partials/magic.html',
    //   controller: 'MagicController'
    // })
    // .when('/partners', {
    //   templateUrl: 'partials/partners.html'
    // })
    // .when('/products', {
    //   templateUrl: 'partials/products.html'
    // })
    .when('/shop', {
      templateUrl: 'partials/shop.html'
    })
    .otherwise('/',{
      redirectTo : '/'
    })

  $locationProvider.html5Mode(true);
});
