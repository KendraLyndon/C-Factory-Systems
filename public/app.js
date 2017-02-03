var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngMaterial']);

app.config(function($stateProvider, $locationProvider) {

  $stateProvider
    .state('index', {
      templateUrl: "partials/home.html",
    })
    .state('index.home', {
      url: "/",
      params: {
          locId: null
      },
      views: {
        "top": { templateUrl: "partials/top.html" },
        "products": { templateUrl: "partials/products.html" },
        "partners": { templateUrl: "partials/partners.html" },
        "magic": {
          templateUrl: "partials/magic.html",
          controller: "MagicController"
        },
        "about": {
          templateUrl: "partials/about.html",
          controller: "AboutController"
        },
        "contact": { templateUrl: "partials/contact.html" }
      }
    })

    .state('faqs', {
      url: "/faqs",
      templateUrl: "partials/faqs.html",
      controller: "FAQController"
    })

    .state('shop', {
      url: "/shop",
      templateUrl: "partials/shop.html"
    })


  $locationProvider.html5Mode(true);
});
