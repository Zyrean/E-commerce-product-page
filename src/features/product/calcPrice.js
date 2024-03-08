export function calcPrice(price, saleAmount) {
  return (price * ((100 - saleAmount) / 100)).toFixed(2);
}
