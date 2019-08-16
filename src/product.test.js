import Product from './product';

it('should have all necessary atribbute', () => {
  const expectedName = 'Peluche';
  const expectedPrice = 14.99;
  const expectedDescrition = 'Oso de felpa para niños';

  const producto = new Product(expectedName, expectedPrice, expectedDescrition);

  expect(producto.name).toBe(expectedName);
  expect(producto.price).toBe(expectedPrice);
  expect(producto.description).toBe(expectedDescrition);
});
