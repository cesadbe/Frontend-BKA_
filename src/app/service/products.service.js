(function () {
    'use strict';

    angular
        .module('storeApp')
        .factory('ProductsService', ProductsService);

    ProductsService.$inject = [];

    function ProductsService() {
        return {
            getProducts: getProducts
        };

        function getProducts(){
            var allProducts = [];
            
            var lawnmower = new LawnmowerRepository().getAll();
            lawnmower.forEach(element => {
                element.type = "Lawnmower"
            });
            allProducts.push(...lawnmower);

            var phoneCase = new PhoneCaseRepository().getAll();
            phoneCase.forEach(element => {
                element.type = "Phone Case"
            });
            allProducts.push(...phoneCase);

            var tshirts = new TShirtRepository().getAll();
            tshirts.forEach(element => {
                element.type = "T-Shirt"
            });
            allProducts.push(...tshirts);
            
            return allProducts;
        }

    }
})();