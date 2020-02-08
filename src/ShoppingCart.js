class ShoppingCart {
  constructor() {
    this.content = [];
  }
  getItems() {
    console.log(this.content);
    return this.content;
  }
  addItem(itemName, quantity, price) {
    this.content.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }
}

module.exports = ShoppingCart;
