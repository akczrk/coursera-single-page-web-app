(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyList();

    toBuy.markAsBought = function (index) {
      ShoppingListCheckOffService.markAsBought(index);
    }

    toBuy.empty = function () {
      return toBuy.items == 0;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBougthList();

    bought.markAsNotBought = function (index) {
      ShoppingListCheckOffService.markAsNotBought(index);
    }

    bought.empty = function () {
      return bought.items == 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var listToBuy = [
      {
        name: "Bananas",
        quantity: 10
      },
      {
        name: "Oranges",
        quantity: 12
      },
      {
        name: "Lemons",
        quantity: 15
      },
      {
        name: "Mango",
        quantity: 16
      },
      {
        name: "Apples",
        quantity: 12
      },
    ];

    var boughtList = [];

    service.getToBuyList = function () {
      return listToBuy;
    };

    service.getBougthList = function () {
      return boughtList;
    };

    service.markAsBought = function (index) {
      boughtList.push(listToBuy[index]);
      listToBuy.splice(index, 1);
    }

    service.markAsNotBought = function (index) {
      listToBuy.push(boughtList[index]);
      boughtList.splice(index, 1);      
    }

  }

})();
