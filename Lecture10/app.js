// (function() {
// 'use strict'

// angular.module('DIApp', [])
// .controller('DIController', DIController);

// DIController.$inject = ['$scope', '$filter'];

// function DIController($scope, $filter) {
//     $scope.name = 'tato';

//     $scope.upper = function() {
//         let upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//     }
// }

// })();

!function(){"use strict";function e(e,n){e.name="tato",e.upper=function(){let t=n("uppercase");e.name=t(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();