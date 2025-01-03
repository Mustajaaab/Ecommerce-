import ProductCard from './ProductCard';
import Bag from '../assets/Images/bag.jpg';
import Jacket from '../assets/Images/jacket.jpg';
import Jeans from '../assets/Images/jeans.jpg';
import Sneakers from '../assets/Images/sneakers.jpg';
import Tshirt from '../assets/Images/tshirt.jpg';
import Watch from '../assets/Images/watch.jpg';

const products = [
  { id: 1, name: 'T-shirt', price: 20.0, image: Tshirt }, // Use Bag directly here
  { id: 2, name: 'Jeans', price: 40.0, image: Jeans },
  { id: 3, name: 'Sneakers', price: 60.0, image: Sneakers },
  { id: 4, name: 'Jacket', price: 160.0, image: Jacket },
  { id: 5, name: 'Mens Watch', price: 90.0, image: Watch },
  { id: 6, name: 'Women Bag', price: 120.0, image: Bag },
];

const ProductList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 gap-4 p-4 py-16">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image} // Pass the image correctly here
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
