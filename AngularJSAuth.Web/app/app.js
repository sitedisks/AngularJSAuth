﻿var app = angular.module('siteApp',
    [
        'ui.bootstrap',
        'ngRoute',
        'LocalStorageModule',
        'angular-loading-bar',
        'wu.masonry'
    ]);


app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "homeCtrl as vm",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginCtrl as vm",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupCtrl as vm",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.when("/profile", {
        controller: "profileCtrl as vm",
        templateUrl: "/app/views/profile.html"
    });

    $routeProvider.when("/about", {
        controller: "aboutCtrl as vm",
        templateUrl: "/app/views/about.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersCtrl as vm",
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