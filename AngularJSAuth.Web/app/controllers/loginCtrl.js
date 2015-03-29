(function () {
    'use strict';

    app.controller('loginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$location', 'authService'];

    function LoginCtrl($location, authService) {
        /* jshint validthis:true */
        var vm = this;
        vm.loginData = {
            userName: "",
            password: ""
        };

        vm.message = "";

        vm.login = function () {

            authService.login(vm.loginData).then(function (response) {

                $location.path('/orders');

            },
             function (err) {
                 vm.message = err.error_description;
             });
        };

    }
})();
