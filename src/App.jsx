import Navbar from "./components/Navbar"
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <ProductList />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
