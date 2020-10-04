(function () {
    'use strict';

    angular.module('jotyapp',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope','$filter'];

    function LunchCheckController($scope, $filter) {
        $scope.message = "";
        $scope.foods = "" ; 
    

        $scope.CheckStatus = function() {
            const food_names = $scope.foods.split(',')
            let full = 0 ;
            
            for (let step = 0 ; step < food_names.length ; step ++ ) {

                if(/\S/.test(food_names[step]) ) {
                    full = 1 ; 
                }
            }

            if ( full == 0 ) {
                $scope.message = "Please enter data first" ;     
                return
            }
            if (food_names.length == 1 && food_names[0] == "" ) {
                $scope.message = "Please enter data first" ; 
            } else if ( food_names.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();