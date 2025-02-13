import { useCart } from "../context/CartContext";
import { FaIndianRupeeSign, FaTrash, FaStar } from "react-icons/fa6";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [showRemoveMessage, setShowRemoveMessage] = useState<boolean>(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (id: string, weight: string) => {
    removeFromCart(id, weight);
    setShowRemoveMessage(true);
    setTimeout(() => setShowRemoveMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="bg-primary py-20">
          <h1 className="text-5xl text-center text-white">Your Cart</h1>
          <div className="mt-10 mx-auto max-w-[1024px]">
            <ul className="mt-5 flex flex-col gap-5 p-4 rounded-lg py-10">
              {cart.map((item) => (
                <li key={`${item.id}-${item.weight}`} className="flex flex-col md:flex-row md:gap-[20px] items-center p-4 rounded-lg shadow-md shadow-blue-900">
                  <Link to={`/product-details/${item.id}`}>
                    <img src={item.image} alt={item.title} className="h-140 w-140 md:w-[200px] md:h-[200px] rounded shadow-sm shadow-blue-100" />
                  </Link>
                  <div className="flex-1 px-3 py-2 max-w-[600px]">
                    <h2 className="text-2xl text-gray-300 pb-2">{item.title} ({item.weight})</h2>
                    <p className="text-green-300 flex gap-1 items-center">{item.rate} <FaStar /> </p>
                    <p className="text-gold flex items-center text-lg">
                      <FaIndianRupeeSign /> {item.price} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <button
                          className="text-white px-3 py-1 rounded-l-md shadow-lg bg-red"
                          onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="text-primary px-3 py-1 bg-gray-100">{item.quantity}</span>
                        <button
                          className="text-white px-2 py-1 rounded-r-md shadow-lg bg-green-500"
                          onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="flex items-center gap-1 bg-red text-white px-3 py-1 rounded-lg shadow-lg ml-4"
                        onClick={() => handleRemoveFromCart(item.id, item.weight)}
                      >
                        Remove <FaTrash />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-start bg-secondary p-5 flex-col rounded-lg shadow-md shadow-backgroundColor">
              <p className="text-sm text-white flex items-center gap-1">Items Cost: <span className="flex items-center "><FaIndianRupeeSign /> {calculateTotal()}</span></p>
              <p className="text-sm text-white flex items-center gap-1">Delivery Charges + Additional Charges: <span className="flex items-center "><FaIndianRupeeSign /> {cart.reduce((total, item) => total + item.quantity * 50, 0)}</span></p>
              <p className="text-[10px] text-red">*Delivery charges and additional charges are fixed</p>
              <p className="text-sm text-white flex items-center gap-1">Total Cost: <span className="flex items-center "><FaIndianRupeeSign /> {calculateTotal() + cart.reduce((total, item) => total + item.quantity * 50, 0)}</span></p>
              <div style={{ "height": "2px", "width": "100%", "backgroundColor": "violet", "marginTop": "5px" }}></div>
              <p className="text-gold mt-5">Ready to Pay the total amount {calculateTotal() + cart.reduce((total, item) => total + item.quantity * 50, 0)}?</p>
              <div className="mt-5 flex-row">
                <Link to="/check-out" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {showRemoveMessage && (
        <div className="fixed absolute top-4 right-4 bg-red text-white px-4 py-2 rounded-lg shadow-lg">
          Item removed from your cart successfully!
        </div>
      )}
    </div>
  );
};

export default Cart;
