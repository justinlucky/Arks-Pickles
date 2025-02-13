import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cart } = useCart();
  const [paymentMode, setPaymentMode] = useState<string>("Cash on Delivery");
  const [address, setAddress] = useState<string>("");
  const [showMap, setShowMap] = useState<boolean>(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0) + cart.reduce((total, item) => total + item.quantity * 50, 0);
  };

  const handleVerifyLocation = () => {
    setShowMap(true);
  };

  const handleCompleteCheckout = () => {
    // Logic to complete the checkout
    alert("Checkout completed successfully!");
  };

  return (
    <div className="bg-primary p-5 flex flex-col items-center gap-5 pt-20">
      <h1 className="text-white text-5xl text-center">Checkout</h1>
      <div className="bg-secondary p-5 rounded-lg shadow-lg max-w-[600px] w-full shadow-blue-700">
        <p className="text-white text-lg flex items-center gap-1">Total Amount: <FaIndianRupeeSign /> {calculateTotal()}</p>
        <div className="mt-5">
          <label className="text-white text-lg">Select Payment Mode:</label>
          <select
            className="w-full p-2 mt-2 rounded-lg"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <div className="mt-5">
          <label className="text-white text-lg">Enter Your Address:</label>
          <textarea
            className="w-full p-2 mt-2 rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg mt-5"
          onClick={handleVerifyLocation}
        >
          Verify Location on Google Maps
        </button>
        {showMap && (
          <div className="mt-5">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              width="100%"
              height="300"
              className="rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg mt-5"
          onClick={handleCompleteCheckout}
        >
          Complete Checkout
        </button>
        <Link to="/cart" className="bg-red text-white px-4 py-2 rounded-lg shadow-lg mt-5">
          Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;