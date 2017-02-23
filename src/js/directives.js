
(function(angular) {
    'use strict';

    angular.module('directives', [])
    // 正在加载...
        .directive('loading', function () {
            return {
                restrict: 'EAC', // E = Element, A = Attribute, C = Class, M = Comment
                template: '<img src="" alt="" />',
                replace: true
            }
        })

})(angular);
