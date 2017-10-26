(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";

    $scope.checkLunchMenu = function () {
      var lunchItemsArray = $scope.lunchItems.split(',');
      var nonEmptyItems = [];
      for (var i = 0; i < lunchItemsArray.length; i++) {
        if (lunchItemsArray[i].length > 0) {
          nonEmptyItems.push(lunchItemsArray[i])
        }
      }

      $scope.message = checkCount(nonEmptyItems);

    };

    function checkCount(items) {
      if (items.length > 6) {
        return "Hmm, it must be very tasty..."
      }

      if (items.length > 3) {
        return "Too much!"
      }

      if (items.length > 0) {
        return "Enjoy!"
      }
      
      return "Please enter data first"
    };

  };
})();
