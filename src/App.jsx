import Navbar from "./components/Navbar"
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <h1 className="text-center font-bold my-5 text-3xl">ESTYLO</h1>
        <ProductList />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
