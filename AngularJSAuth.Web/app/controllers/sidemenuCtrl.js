(function () {
    'use strict';

    app.controller('sidemenuCtrl', SideMenuCtrl);

    SideMenuCtrl.$inject = ['$location', 'authService'];

    function SideMenuCtrl($location, authService) {
        /* jshint validthis:true */
        var vm = this;



        vm.logOut = function () {
            authService.logOut();
            $location.path('/home');
        }

        vm.authentication = authService.authentication;
    }
})();
