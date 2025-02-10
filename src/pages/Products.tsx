import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../assets/products.json";
import FooterDark from "../components/FooterDark";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  preparation_steps: string[];
  rate: number;
  wishlist: boolean;
  added_to_cart: boolean;
  rating: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData as Product[]);
  }, []);

  return (
    <div className="bg-primary p-2 flex flex-col gap-20 pt-20">
      <h1 className="text-white text-center text-5xl"> Our Products</h1>
      <div className="flex flex-wrap gap-10 justify-center max-w-[1024px] items-center mx-auto">
        {products.map((product) => (
          <Link key={product.id} to={`/product-details/${product.id}`}>
            <div className="flex flex-col items-center gap-2">
              <img src={product.image} alt={product.title} className="w-[250px] h-[250px] rounded-lg shadow-lg" />
              <h2 className="text-gray-200">{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <FooterDark/>
    </div>
  );
};

export default Products;
