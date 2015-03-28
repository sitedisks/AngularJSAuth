var app = angular.module('siteApp',
    [
        'ui.bootstrap',
        'ngRoute',
        'LocalStorageModule',
        'angular-loading-bar',
        'ngAnimate'
    ]);

//app.controller('testCtrl', function ($scope) {
//    $scope.message = 'Love you';
//});

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/app/views/orders.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

app.run(['authService', function (authService) {
    //authService.fillAuthData();
}]);