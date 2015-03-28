var app = angular.module('siteApp', ['ui.bootstrap', 'ngRoute']);

app.controller('testCtrl', function ($scope) {
    $scope.message = 'Love you';
});