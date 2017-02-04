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
