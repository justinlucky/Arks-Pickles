import { useParams, Link } from "react-router-dom";
import productsData from "../assets/products.json";
import { FaIndianRupeeSign, FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  preparation_steps: string[];
  rate: number;
  wishlist: boolean;
  added_to_cart: boolean;
  rating: number;
  max_price: number;
  min_price: number;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData.find((product: Product) => product.id === id) : undefined;

  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showAllSteps, setShowAllSteps] = useState<boolean>(false);

  const calculatePrice = (weight: string) => {
    switch (weight) {
      case "250g":
        return product?.max_price ? product.max_price / 2 - 200 : 0;
      case "500g":
        return product?.min_price || 0;
      case "1kg":
        return product?.max_price || 0;
      default:
        return 0;
    }
  };

  const handleAddToCart = () => {
    if (!selectedWeight) {
      setErrorMessage("Please select a weight before adding to the cart.");
      setTimeout(() => setErrorMessage(null), 3000); // Hide message after 3 seconds
      return;
    }

    if (product && selectedWeight) {
      addToCart({
        ...product,
        price: calculatePrice(selectedWeight),
        quantity: 1,
        weight: selectedWeight,
      });
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-primary p-2 flex flex-col items-center gap-5 pt-20">
      {showMessage && (
        <div className="fixed absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {product.title} has been added to the cart!
        </div>
      )}
      {errorMessage && (
        <div className="fixed top-4 right-4 bg-red text-white px-4 py-2 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}
      <h1 className="text-white text-5xl text-center font-teko">{product.title}</h1>
      <div className="flex md:flex-row md:gap-10 max-w-[1024px] flex-col items-center p-4">
        <div className="relative md:w-[300px] lg:h-[450px] lg:w-[450px] md:h-[300px] h-full w-full">
          <img src={product.image} alt={product.title} className="w-full h-full rounded-lg shadow-lg" />
          <div className="absolute top-2 right-2">
            {product.wishlist ? <FaHeart className="text-red-500 text-[30px]" /> : <FaRegHeart className="text-white text-[30px]" />}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-[400px] w-full">
          <p className="text-gray-200 mt-5 text-justify">{product.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">{product.rate} ★</span>
            <span className="text-gray-200">(as per {product.rating} reviews)</span>
          </div>
          <div className="flex flex-col items-center gap-4 lg:justify-between justify-center pt-1">
            <div className="text-green-500 text-2xl flex items-center gap-1">
              <FaIndianRupeeSign />
              <span>{product.min_price}</span>
              <span className="text-gray-400">-</span>
              <FaIndianRupeeSign />
              <span>{product.max_price}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <button
                  className={`relative px-3 py-2 rounded-l-lg shadow-lg ${selectedWeight === "250g" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                  onClick={() => setSelectedWeight("250g")}
                >
                  <div className="absolute top-[-20px] left-0 bg-gold p-[.5px] rounded-md text-white ">New</div>
                  250 grams
                </button>
                <button
                  className={`px-3 py-2 shadow-lg ${selectedWeight === "500g" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                  onClick={() => setSelectedWeight("500g")}
                >
                  500 grams
                </button>
                <button
                  className={`px-3 py-2 rounded-r-lg shadow-lg ${selectedWeight === "1kg" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                  onClick={() => setSelectedWeight("1kg")}
                >
                  1 kg
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {selectedWeight && (
              <div className="text-white mt-2 flex items-center">
                <span className="text-lg">{selectedWeight}</span>, will cost you <span className="flex items-center text-lg"><FaIndianRupeeSign /> {calculatePrice(selectedWeight)}</span>
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-4 lg:px-20 flex-col px-10">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
              onClick={handleAddToCart}
            >
              {product.added_to_cart ? "Added to Cart" : "Add to Cart"}
            </button>
            <Link to="/" className="bg-gold px-4 py-2 text-center text-white rounded-lg shadow-lg">Buy Now</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 max-w-[1024px] w-full p-4 bg-secondary rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mt-6">Why do our customers love our {product.title}?</h2>
        <div style={{ "height": "2px", "width": "100%", "backgroundColor": "purple" }}></div>
        <ul className="text-gray-200 list-decimal flex flex-col gap-2 px-10 py-3">
          {product.preparation_steps.slice(0, showAllSteps ? product.preparation_steps.length : 3).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        {product.preparation_steps.length > 1 && (
          <button
            className="text-blue-500 mt-1"
            onClick={() => setShowAllSteps(!showAllSteps)}
          >
            {showAllSteps ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;