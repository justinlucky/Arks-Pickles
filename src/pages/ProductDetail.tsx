import { useParams } from "react-router-dom";
import productsData from "../assets/products.json";

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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData.find((product: Product) => product.id === parseInt(id)) : undefined;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-primary p-4 flex flex-col items-center gap-4 pt-20">
      <img src={product.image} alt={product.title} className="w-[300px] h-[300px] rounded-lg shadow-lg" />
      <h1 className="text-white text-4xl">{product.title}</h1>
      <p className="text-gray-200">{product.description}</p>
      <h2 className="text-white text-2xl">Preparation Steps:</h2>
      <ul className="text-gray-200 list-disc list-inside">
        {product.preparation_steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;