(function () {
    'use strict';

    angular
        .module('storeApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['ProductsService', '$scope'];

    function ProductsController(ProductsService, $scope) {

        var vm = this;
        
        vm.listCurrency = ['NZD', 'USD', 'EUR'];
        vm.listProductTypes = ['Lawnmower', 'Phone Case', 'T-Shirt'];        
        vm.listAllProducts = [];
        vm.listProductsFiltered = [];

        vm.currency = vm.listCurrency[0];
        vm.type = null;

        vm.filterProducts = filterProducts;


        init();


        function init() {
            vm.listAllProducts = ProductsService.getProducts();
            vm.listProductsFiltered = vm.listAllProducts;
        }


        function filterProducts(){
            if(vm.type==null){
                vm.listProductsFiltered = vm.listAllProducts;
            }else{
                vm.listProductsFiltered = vm.listAllProducts.filter(product => product.type==vm.type);
            }
        }

    }

})();

