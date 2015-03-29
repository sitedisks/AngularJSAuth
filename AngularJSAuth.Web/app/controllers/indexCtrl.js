(function () {
    'use strict';

    app.controller('indexCtrl', IndexCtrl);

    IndexCtrl.$inject = ['$location', 'authService'];

    function IndexCtrl($location, authService) {
        /* jshint validthis:true */
        var vm = this;
        vm.logOut = function () {
            authService.logOut();
            $location.path('/home');
        }

        vm.authentication = authService.authentication;
    }
})();
