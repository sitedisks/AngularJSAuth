(function () {
    'use strict';

    app.controller('ordersCtrl', OrdersCtrl);

    OrdersCtrl.$inject = ['ordersSvc'];

    function OrdersCtrl(ordersSvc) {
        /* jshint validthis:true */
        var vm = this;
        vm.orders = [];

        ordersSvc.getOrders().then(function (results) {

            vm.orders = results.data;

        }, function (error) {
            //alert(error.data.message);
        });
    }
})();
