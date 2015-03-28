var app = angular.module('siteApp',
    [
        'ui.bootstrap',
        'ngRoute',
        'LocalStorageModule',
        'angular-loading-bar',
        'ngAnimate'
    ]);

app.controller('testCtrl', function ($scope) {
    $scope.message = 'Love you';
});