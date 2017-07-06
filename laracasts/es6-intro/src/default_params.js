function applyDiscount(cost, discount) {
  discount = discount || .10;

  return cost - (cost * discount);
}

alert(applyDiscount(10, 0.2));
