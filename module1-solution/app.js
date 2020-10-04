(function () {
    'use strict';

    angular.module('jopu-app',[])
    .controller('LunchCheckController', LunchCheck);

    LunchCheckController.$inject = ['$scope','$filter'];

    function LunchCheck($scope, $filter) {
        $scope.message = ""
    }

    $scope.CheckStatus = function() {
        
    };
})();