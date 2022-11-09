

let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 }
];

cart.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1;
});

function itemsInArray(itemElement) {
  return itemElement.item;
  //+ itemElement.price + " " + itemElement.quantity
}

let cartList = cart.map(itemsInArray);




let numCart = cartList.length;
// for (let i = 0; i <c numCart; i++){
//   console.log(cartList[i]);
//}
function displayCartItems(itemElement) {
  console.log(itemElement);
}


cartList.forEach(displayCartItems);

////////////////
//Number 2 

function totalPriceOfProducts(itemTotal, quantityValue) {
  return itemTotal + quantityValue.price;
}
let sum = cart.reduce(totalPriceOfProducts, 0)
console.log("The total peice of the menu " + sum)