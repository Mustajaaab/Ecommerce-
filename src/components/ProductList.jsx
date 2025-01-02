
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-shirt', price: 20.0, image: 'path/to/image1.jpg' },
  { id: 2, name: 'Jeans', price: 40.0, image: 'path/to/image2.jpg' },
  { id: 3, name: 'Sneakers', price: 60.0, image: 'path/to/image3.jpg' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-16
    ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
