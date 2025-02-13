import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles.css";
import 'swiper/css/scrollbar';
import productsData from "../assets/products.json";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="">
      <div className=" py-5 px-2 flex items-center h-[550px] md:h-[500px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 15000, disableOnInteraction: false }} // Set autoplay delay to 15 seconds
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade]}
          className="w-full h-full max-w-[1024px] bg-footer py-5 px-2"
          effect="fadeIn"
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="flex flex-col md:flex-row md:gap-[15px] items-center justify-center"
                onClick={() => handleNavigation(`/product-details/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[350px] md:w-[400px] md:h-[400px] relative"
                />
                <div className="relative md:static">
                  <h2 className="text-white text-center md:text-4xl text-2xl mt-2">{product.title}</h2>
                  <p className="text-gray-300 text-center mt-5">{product.slogan}</p>
                  <div className="hidden md:flex md:flex-col items-center mt-10">
                    <p className="text-white text-2xl text-center">Get the {product.title} at the best price.</p>
                    <p className="text-white flex text-xl mt-2 text-center">Starting from &nbsp;
                      <span className="flex items-center text-green-500 font-bold"><FaIndianRupeeSign />{product.min_price}</span>&nbsp; to &nbsp;
                      <span className="flex items-center text-green-500 font-bold"><FaIndianRupeeSign />{product.max_price}</span>.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;