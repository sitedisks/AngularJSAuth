(function () {
    'use strict';

    app.service('ordersSvc', OrdersSvc);

    OrdersSvc.$inject = ['$http'];

    function OrdersSvc($http) {
        var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
        var ordersServiceFactory = {};

        var _getOrders = function () {

            return $http.get(serviceBase + 'api/orders').then(function (results) {
                return results;
            });
        };

        ordersServiceFactory.getOrders = _getOrders;

        return ordersServiceFactory;
    }
})();