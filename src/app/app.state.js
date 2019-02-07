(function() {
    'use strict';

    angular
        .module('storeApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            url: '/',
            views: {
                'content': {
                    template: 
                     '<div class="row">'
                    +   '<div class="col-md-6"><label>Type of product</label>    '
                    +       '<select ng-change="vm.filterProducts()" ng-model="vm.type" ng-options="t as t for t in vm.listProductTypes">'
                    +           '<option value="">All</option>'
                    +       '</select>'
                    +   '</div>'
                    +   '<div class="col-md-6"><label>Currency</label>    '
                    +       '<select ng-model="vm.currency" ng-options="c as c for c in vm.listCurrency">'
                    +       '</select>'
                    +   '</div>'
                    +'</div>'
                    +'<table class="table table-striped">'
                    +   '<thead>'
                    +       '<tr><td colspan="3">Products</td></tr>'
                    +       '<tr>'
                    +           '<td>Name</td>'
                    +           '<td>Price</td>'
                    +           '<td>Type</td>'
                    +       '</tr>'
                    +   '</thead>'
                    +   '<tbody>'
                    +       '<tr ng-repeat="product in vm.listProductsFiltered">'
		            +		    '<td>{{product.name}}</td>'
                    +		    '<td>{{product.price | currency :vm.currency}}</td>'
                    +	        '<td>{{product.type}}</td>'
                    +       '</tr>'
                    +   '</tbody>'
                    +'</table>',
                    controller: 'ProductsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
