(function () {
    'use strict';

    app.controller('statusCtrl', StatusCtrl);

    StatusCtrl.$inject = ['$location', 'authService'];

    function StatusCtrl($location, authService) {
        /* jshint validthis:true */
        var vm = this;

        vm.logOut = function () {
            authService.logOut();
            $location.path('/home');
        }

        vm.authentication = authService.authentication;
    }
})();
