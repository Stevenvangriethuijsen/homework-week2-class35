class ShoppingCart {
  constructor() {
    this.content = [];
  }
  getItems() {
    return this.content;
  }
  addItem(itemName, quantity, price) {
    this.content.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }
  clear() {
    return (this.content = []);
  }
  total() {
    if (this.content.length === 0) {
      return 0;
    } else {
      const total = this.content
        .map(function(ele) {
          return ele.pricePerUnit * ele.quantity;
        })
        .reduce(function(acc, curr) {
          return acc + curr;
        });
      return total;
    }
  }
}

module.exports = ShoppingCart;
