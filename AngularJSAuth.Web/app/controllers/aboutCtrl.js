(function () {
    'use strict';

    app.controller('aboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['authService'];

    function AboutCtrl(authService) {
        /* jshint validthis:true */
        var vm = this;
       
        vm.message = 'About Us';
    }
})();
