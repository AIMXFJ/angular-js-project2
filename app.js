(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.addBoughtItem = function (index) {
    ShoppingListCheckOffService.addBoughtItem(index);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.addBuyItem = function (index) {
    ShoppingListCheckOffService.addBuyItem(index);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // Lists of items
  var buyItems = [{ name: "cookies", quantity: 10 },{ name: "sausages", quantity: 9 },{ name: "apples", quantity: 6 },
  { name: "cola", quantity: 5 },{ name: "chocolate", quantity: 3 }];
  var boughtItems = [];

  service.addBoughtItem = function (item) {
    boughtItems.push(buyItems[item]);
    buyItems.splice(item, 1);
  };

  service.addBuyItem = function (item) {
  	buyItems.push(boughtItems[item]);
    boughtItems.splice(item, 1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();