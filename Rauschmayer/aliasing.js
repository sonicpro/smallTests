var fruitBasket = {
    _fruits: [ 'Apple', 'Orange' ],
    getFruits: function () {
          return this._fruits;
      }
};

var fruitBasketFixed = {
    _fruits: [ 'Apple', 'Orange' ],
    getFruits: function () {
          return this._fruits.slice();
      }
};
