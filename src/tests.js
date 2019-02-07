QUnit.test("Display price with currency NZD", function( assert ) {
    var injector = angular.injector(['ng', 'storeApp']);
    var filter = injector.get('$filter');

    var result = filter('currency')(3000,'NZD');
    assert.equal( result, "3000.00", "I expect 3000 NZD to be displayed as 3000.00 NZD" );

    var result = filter('currency')(45,'NZD');
    assert.equal( result, "45.00", "I expect 45 NZD to be displayed as 45.00 NZD" );

    var result = filter('currency')(1020,'NZD');
    assert.equal( result, "1020.00", "I expect 1020 NZD to be displayed as 1020.00 NZD" );
  });


  QUnit.test("Display price with currency EUR", function( assert ) {
    var injector = angular.injector(['ng', 'storeApp']);
    var filter = injector.get('$filter');

    var result = filter('currency')(3000,'EUR');
    assert.equal( result, "2010.00", "I expect 3000 NZD to be displayed as 2010.00 EUR" );

    var result = filter('currency')(45,'EUR');
    assert.equal( result, "30.15", "I expect 45 NZD to be displayed as 30.15 EUR" );

    var result = filter('currency')(1020,'EUR');
    assert.equal( result, "683.40", "I expect 1020 NZD to be displayed as 683.40 EUR" );
  });


  QUnit.test("Display price with currency USD", function( assert ) {
    var injector = angular.injector(['ng', 'storeApp']);
    var filter = injector.get('$filter');

    var result = filter('currency')(3000,'USD');
    assert.equal( result, "2280.00", "I expect 3000 NZD to be displayed as 2280.00 USD" );

    var result = filter('currency')(45,'USD');
    assert.equal( result, "34.20", "I expect 45 NZD to be displayed as 34.20 USD" );

    var result = filter('currency')(1020,'USD');
    assert.equal( result, "775.20", "I expect 1020 NZD to be displayed as 775.20 USD" );
  });
