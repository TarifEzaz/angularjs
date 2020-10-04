(function () {
    'use strict';

    angular.module('joty-app',[])
    .controller('LunchCheckController', LunchCheck);

    LunchCheckController.$inject = ['$scope','$filter'];

    function LunchCheck($scope, $filter) {
        $scope.message = "";
        $scope.foods = "" ; 
    }

    $scope.CheckStatus = function() {
        const food_names = $scope.foods.split(',')
        if (food_names.length == 0 ) {
            $scope.message = "Please enter data first" ; 
        } else if ( food_names.length <= 3) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
    };
})();