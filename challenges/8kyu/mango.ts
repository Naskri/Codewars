export function mango(quantity: number, price: number): number {
  const extras = Math.floor(quantity / 3);
  return (quantity - extras) * price;
}
