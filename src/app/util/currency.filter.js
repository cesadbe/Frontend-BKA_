(function() {
    'use strict';

    angular
        .module('storeApp')
        .filter('currency', currency);

    function currency() {
        return currencyFilter;

        function currencyFilter (value, toCurrency) {
            if(toCurrency == "NZD"){
                value = value.toFixed(2);
            }
            if(toCurrency == "USD"){
                value = (value * 0.76).toFixed(2);
            }
            if(toCurrency == "EUR"){
                value = (value * 0.67).toFixed(2);
            }
            return value;
        }
    }
})();
