var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngMaterial', 'uiGmapgoogle-maps']);

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
        "partners": {
          templateUrl: "partials/partners.html",
          controller: "MapController"
         },
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

app.controller("AboutController", function($scope, TeamService) {
  $scope.vm = {};
  $scope.vm.team = TeamService.teamMembers;

})

app.controller("FAQController", function($scope, FAQService) {
  $scope.vm = {};
  $scope.vm.questions = FAQService.questions;
})

app.controller("MagicController", function($scope, CategoryService) {
  $scope.vm = {};
  $scope.vm.categories = CategoryService.all;

  $scope.toggleSelected = function(category){
    category.selected = !category.selected;
  }
})

app.controller("MapController", function($scope) {

  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

})

app.controller("ScrollController", function($scope, $state, $stateParams, $location, $anchorScroll) {

  $scope.vm = {};
  $scope.vm.showDropdown = false;

  $scope.scrollTo = function(id) {
    if ($state.current.name === "index.home") {
      $location.hash(id);
      $anchorScroll();
    } else {
      $state.go("index.home");
      // $location.hash(id);
      // $anchorScroll();
    }
  };

  $scope.toggleMenu = function(){
    console.log("toggled");
    $scope.vm.showDropdown = !$scope.vm.showDropdown;
  };

})

app.factory('CategoryService', function(){
  return {
    all: [
      {
        id: 'art',
        type: 'Art',
        photo: '../assets/img/Art.jpg',
        description: 'The ideal temperature for storing art is between 66°F to 74°F, with the level of relative humidity ranging from 42% to 58%.'
      },
      {
        id: 'cigars',
        type: 'Cigars',
        photo: '../assets/img/Cigars.jpg',
        description: 'The optimum temperature for storing cigars is 68°F, with the ideal level of relative humidity between 65% and 75%.    To avoid unwanted dampening or drying out, a certain temperature/humidity ratio should be respected. Each decrease (or increase) of 1.8° Fahrenheit in temperature must be balanced out by the increase (or decrease) of 3.0 % in relative humidity (in the ratio of 1.8°F / 3.0 %).'
      },
      {
        id: 'coffee',
        type: 'Coffee',
        photo: '../assets/img/Coffee.jpg',
        description: 'The optimum temperature for storing roasted coffee ranges from 42°F to 77°F, with the ideal level of relative humidity between 50% and 65%.'
      },
      {
        id: 'documents',
        type: 'Documents',
        photo: '../assets/img/Documents.jpg',
        description: 'The optimum temperature for storing documents is less than 70°F, although it can range from 41°F to 77°F, with ideal levels of humidity generally between 30% and 50% (the lower end of this range is preferable).'
      },
      {
        id: 'fruits-vegetables',
        type: 'Fruits & Vegetables',
        photo: '../assets/img/Fruits-Vegetables.jpg',
        description: 'Optimum temperatures for storing fresh fruits and citrus range from 32°F to 61°F, depending on the specific item, with the ideal level of relative humidity between 80% and 90%.  In the case of dried fruit, the optimum temperature ranges from 32°F to 77°F with the ideal level of relative humidity between 50% and 70%.  The optimum temperature for storing vegetables ranges from 32°F to 58°F, depending on the specific item, with the ideal level of relative humidity between 80% and 95%.'
      },
      {
        id: 'herbs',
        type: 'Herbs',
        photo: '../assets/img/Herbs.jpg',
        description: 'The optimum temperature for storing herbs ranges from 32°F to 61°F, depending on the specific item, with the ideal level of relative humidity between 80% and 90%.'
      },
      {
        id: 'medical',
        type: 'Medical Specimen Transport',
        photo: '../assets/img/Organ-Transport.jpg',
        description: 'Medical specimens required cold temperatures at elevated humidity levels for extended periods of time while in transit. There are a wide range of applications including EMT, Fire & Rescue, Pharmaceutical transport, growth hormone, vaccine travel kits, IV Fluids, specimen and biohazard transport.  Contact CFS for more information about specific applications.'
      },
      {
        id: 'medicine',
        type: 'Medicine & Supplements',
        photo: '../assets/img/Medicine-Supplements.jpg',
        description: 'Optimum temperatures for medicine & supplements range from 58°F to 86°F, depending on the specific item, with the ideal level of relative humidity at or below 60%.'
      },
      {
        id: 'seeds',
        type: 'Seeds',
        photo: '../assets/img/Seeds.jpg',
        description: 'Seeds are unique in their long-term storage requirements. They should be stored in a temperature and humidity controlled environment which the sum of the temperature (in Fahrenheit) plus the relative humidity (in percent) does not exceed 100. Thus, if seeds are stored at a temperature of 70°F, the humidity should not exceed 30%.  Seeds should never be frozen unless the moisture content is below 1%.'
      },
      {
        id: 'spices',
        type: 'Spices',
        photo: '../assets/img/Spices.jpg',
        description: 'The optimum temperature for storing spices ranges from 41°F to 77°F, with the ideal level of relative humidity between 50% and 75%, depending on the specific spice being stored.'
      },
      {
        id: 'sports',
        type: 'Sports Equipment',
        photo: '../assets/img/Sports.jpg',
        description: 'GolfBallTest.org has debunked a myth about golf ball storage: "Storing golf balls in the freezer is never recommended and does not preserve their compression and freshness, contrary to some belief." In fact, most all sports equipment does best with relatively moderate temperatures in the range of 70°F to 80°F and at a relative humidity that does not exceed 50%.'
      },
      {
        id: 'string',
        type: 'String Instruments',
        photo: '../assets/img/Instruments.jpg',
        description: 'The optimum temperature for storing string instruments ranges from 65°F to 75°F, with the ideal level of relative humidity between 45% and 65%.'
      },
      {
        id: 'teas',
        type: 'Teas',
        photo: '../assets/img/Teas.jpg',
        description: 'The optimum temperature for storing teas ranges from 41°F to 77°F, with the ideal levels of relative humidity between 50% and 60%.'
      },
      {
        id: 'truffles',
        type: 'Truffles and Mushrooms',
        photo: '../assets/img/Truffles.jpg',
        description: 'The optimum temperature for storing truffles and mushrooms ranges from 32°F to 36°F, with the ideal level of relative humidity at 95%.'
      },
      {
        id: 'wine',
        type: 'Wine',
        photo: '../assets/img/Wine.jpg',
        description: 'The optimum temperature for storing wine ranges from 45°F to 60°F, depending upon the type, with the ideal level of relative humidity between 70% to 90%.  The typical wine refrigerator controls the temperature, but does not address humidity.  The result is the drying of the cork over time, allowing bacteria to reach, and spoil, the contents of the bottle.'
      }
    ]
  }
})

app.factory('FAQService', function(){
  return {
    questions : [
      {
        question: "How much product does the Biosafe Home hold?",
        answer: "The BioSafe Home unit holds 4 separate 3-ounce (by volume) containers, each holding 1/8 ounce (by weight) of organic material.  Altogether, it holds a total of ½ ounce by weight.  Other storage configurations for the BioSafe Home unit are available.  Larger units are also available, including rectangular units that hold up to a pound of organic material, are battery operated, and may be stored overnight without external power."
      },
      {
        question: "Does it affect the taste?",
        answer: "No, the BioSafe Home does not affect the taste of any organic material."
      },
      {
        question: "I live in a dry area.  Will it increase the humidity until it is at the proper level?",
        answer: "In any area where the outside humidity is at least 20% (almost all North American cities), the BioSafe Home is capable of raising the relative humidity of the storage chamber to the proper level.    For environments with an average relative humidity of less than 20%, an optional “humidity-boost” system is available."
      },
      {
        question: "I live in a humid area.  Will it dry my products to the proper level?",
        answer: "Yes, the BioSafe Home is capable of lowering the humidity of the storage chamber to the desired level regardless of the humidity of the area in which it is used."
      },
      {
        question: "I live in a humid area.  Why do I need a BioSafe to store organic material?",
        answer: "Too much humidity is a set-up for overgrowth by molds and fungus, which can distort flavor, smell awful, and produce toxins."
      },
      {
        question: "I live in an area with high temperature.  How can the BioSafe help me?",
        answer: "Moderate to high temperature, especially in conjunction with high relative humidity (over 65%,) contributes to growth of fungus and mold in organic material.  To combat this, the BioSafe is available with an optional temperature control module."
      },
      {
        question: "Does the BioSafe make noise?",
        answer: "The BioSafe Home contains a whisper-quiet air mover which runs from time to time.  It makes less noise than a laptop computer fan.  For most people, it is inaudible except within a short distance of the unit."
      },
      {
        question: "How much power does the BioSafe use?",
        answer: "The BioSafe Home uses less than 5 watts of power and plugs into a standard 1 Amp (or more) micro-USB cell phone charger."
      },
      {
        question: "How big is the unit?",
        answer: "The BioSafe Home is cylindrical in shape.  Excluding the protrusions for the lid hinge and latch, the unit is 8-1/4” tall, with a 5” diameter."
      },
      {
        question: "How long is the warranty?",
        answer: "The BioSafe Home is warranted for 1 year against defects in material or workmanship.  An extended warranty is also available."
      },
      {
        question: "Is it available in different colors?",
        answer: "Yes. The standard unit has a stainless steel body with a black base and black lid. Optional colors for the base and lid are available."
      },
      {
        question: "What do the different colored lights mean?",
        answer: "The BioSafe Home has a single indicator that changes color to indicate the status of the storage chamber. Green mean the system is raising the humidity in the storage chamber. Red means the system is decreasing the humidity, and blue indicates that the storage chamber has reached, and is being maintained, at the target humidity. One of these three colors is always displayed when the unit is powered. A separate similar indicator displays cooling and heating operations in temperature-controlled units."
      },
      {
        question: "I see how the BioSafe can keep my organics at the proper humidity and temperature, but can the BioSafe keep my organics secure?",
        answer: "The BioSafe Home comes with a built-in combination lock on the cover, which can be set to any 4 digit sequence you prefer.  The food-grade silicon seal also keeps all but the most pungent biologics odor-free."
      }
    ]
  }
})

app.factory('TeamService', function(){
  return {
    teamMembers : [
      {
        name: 'Rick Bernheim',
        title: 'President and CEO',
        photo: '../assets/img/Rick-Bernheim-1.jpg',
        accomplishments: [
          'Serial high-tech entrepreneur, 11 startup/early-stage companies',
          'Led businesses to $125M',
          '5 Granted and 11 in-process patents'
        ]
      },
      {
        name: 'Frieda Sands',
        title: 'VP Marcom Secretary and Treasurer',
        photo: '../assets/img/Frieda-Sands-1.jpg',
        accomplishments: [
          'Serial entrepreneur, 5 startup/early-stage companies',
          'Former director and board member of various non-profits'
        ]
      },
      {
        name: 'Ray Gottesfeld, M.D.',
        title: 'VP QA and Clinical Affairs',
        photo: '../assets/img/Ray-Gottesfeld-1.jpg',
        accomplishments:
        [
          'Serial entrepreneur, 6 startup/early-stage companies',
          'Chief Medical Officer of $300M Division'
        ]
      }
    ]
  }
})
