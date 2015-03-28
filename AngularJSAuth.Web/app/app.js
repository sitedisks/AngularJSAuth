var app = angular.module('siteApp', ['ui.bootstrap', 'ngRoute', 'LocalStorageModule']);

app.controller('testCtrl', function ($scope) {
    $scope.message = 'Love you';
});