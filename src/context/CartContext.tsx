import React, { createContext, useState, useContext, ReactNode } from "react";

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

interface CartProduct extends Product {
  price: number;
  quantity: number;
  weight: string;
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: string, weight: string) => void;
  updateQuantity: (id: string, weight: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.weight === product.weight
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.weight === product.weight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id: string, weight: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id || item.weight !== weight));
  };

  const updateQuantity = (id: string, weight: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.weight === weight
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
