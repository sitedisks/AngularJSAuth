(function () {
    'use strict';

    app.controller('profileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['authService'];

    function ProfileCtrl(authService) {
        /* jshint validthis:true */
        var vm = this;
       
        vm.message = 'Profile';
    }
})();
