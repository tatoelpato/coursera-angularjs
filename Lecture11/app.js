(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.name = "Luigi";
      $scope.activity = "eating"
      $scope.stateOfBeing = "hungry";
    
      $scope.sayMsg = function () {
        return $scope.name + ' likes ' + $scope.activity;
      };
    
      $scope.feedLuigi = function () {
        $scope.stateOfBeing = "fed";
      };
    }
    
    })();