import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../assets/products.json";
import FooterDark from "../components/FooterDark";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  title: string;
  image: string;
  max_price: number;
  min_price: number;
  description: string;
  preparation_steps: string[];
  rate: number;
  wishlist: boolean;
  added_to_cart: boolean;
  rating: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [selectedWeights, setSelectedWeights] = useState<{ [key: string]: string | null }>({});
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setProducts(productsData as Product[]);
  }, []);

  const calculatePrice = (product: Product, weight: string) => {
    switch (weight) {
      case "250g":
        return product.max_price ? product.max_price / 2 - 200 : 0;
      case "500g":
        return product.min_price || 0;
      case "1kg":
        return product.max_price || 0;
      default:
        return 0;
    }
  };

  const handleAddToCart = (product: Product) => {
    const selectedWeight = selectedWeights[product.id];
    if (!selectedWeight) {
      setErrorMessage("Please select a weight before adding it to the cart.");
      setTimeout(() => setErrorMessage(null), 3000); // Hide message after 3 seconds
      return;
    }

    addToCart({
      ...product,
      price: calculatePrice(product, selectedWeight),
      quantity: 1,
      weight: selectedWeight,
    });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="bg-primary p-2 flex flex-col gap-20">
      <Navbar />
      <h1 className="text-white text-center text-5xl font-teko">Our Products</h1>
      <div className="flex flex-wrap gap-10 justify-center max-w-[1024px] items-center mx-auto">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-2">
            <Link to={`/product-details/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-[250px] h-[250px] rounded-lg shadow-lg shadow-gray-700 hover:shadow-gray-500"
              />
              <h2 className="text-gray-200 mt-3 text-xl text-center">{product.title}</h2>
              <p className="text-green-500 flex justify-center gap-2 text-lg">
                <span className="flex items-center">
                  <FaIndianRupeeSign />
                  {product.min_price}
                </span>
                <span className="text-gray-400">-</span>
                <span className="flex items-center">
                  <FaIndianRupeeSign />
                  {product.max_price}
                </span>
              </p>
            </Link>
            <div className="flex gap-1 mt-2">
              <button
                className={`px-3 py-1 rounded-l-lg shadow-lg ${selectedWeights[product.id] === "250g" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setSelectedWeights({ ...selectedWeights, [product.id]: "250g" })}
              >
                250g
              </button>
              <button
                className={`px-3 py-1 shadow-lg ${selectedWeights[product.id] === "500g" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setSelectedWeights({ ...selectedWeights, [product.id]: "500g" })}
              >
                500g
              </button>
              <button
                className={`px-3 py-1 rounded-r-lg shadow-lg ${selectedWeights[product.id] === "1kg" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setSelectedWeights({ ...selectedWeights, [product.id]: "1kg" })}
              >
                1kg
              </button>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg mt-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {showMessage && (
        <div className="fixed absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Product has been added to the cart successfully!
        </div>
      )}
      {errorMessage && (
        <div className="fixed absolute top-4 right-4 bg-red text-white px-4 py-2 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}
      <FooterDark />
    </div>
  );
};

export default Products;
