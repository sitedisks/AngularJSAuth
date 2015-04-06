(function () {
    'use strict';

    app.controller('homeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$location']; 

    function HomeCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
       
        vm.bricks = [{
            src: 'img/gallery/photo1.jpg'
        }, {
            src: 'img/gallery/photo2.jpg'
        }, {
            src: 'img/gallery/photo3.jpg'
        }, {
            src: 'img/gallery/photo4.jpg'
        }, {
            src: 'img/gallery/photo5.jpg'
        }, {
            src: 'img/gallery/photo6.jpg'
        }
        ];
    }
})();
