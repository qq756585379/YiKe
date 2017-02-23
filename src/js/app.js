(function(angular) {
    'use strict';
    angular.module('App', ['ngRoute','directives'])

        .config(['$routeProvider', function($routeProvider) {
            // 今日一刻
            $routeProvider.when('/', {
                templateUrl: 'views/today.html',
                controller: 'TodayController'
            })
            // 往期内容
            .when('/older', {
                templateUrl: 'views/older.html',
                controller: 'OlderController'
            })
            // 热门作者
            .when('/author', {
                templateUrl: 'views/author.html',
                controller: 'AuthorController'
            })
            // 个人中心（作者）
            .when('/center', {
                templateUrl: 'views/center.html'
            })
            // 栏目浏览
            .when('/category', {
                templateUrl: 'views/category.html'
            })
            // 栏目列表
            .when('/list', {
                templateUrl: 'views/list.html'
            })
            // 我的喜欢
            .when('/favourite', {
                templateUrl: 'views/favourite.html'
            })
            // 设置
            .when('/settings', {
                templateUrl: 'views/settings.html'
            });
        }])

})(angular);
