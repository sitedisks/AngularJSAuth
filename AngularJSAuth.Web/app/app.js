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
        controller: "loginController as vm",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupCtrl as vm",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController vm",
        templateUrl: "/app/views/orders.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});


app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorSvc');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);