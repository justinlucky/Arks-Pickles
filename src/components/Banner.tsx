import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles.css";
import 'swiper/css/scrollbar';
import productsData from "../assets/products.json";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="">
      <div className=" py-5 flex items-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 15000, disableOnInteraction: false }} // Set autoplay delay to 15 seconds
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade]}
          className="w-full h-full max-w-[1024px] bg-footer py-5 px-2 flex"
          effect="fadeIn"
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className=""
                onClick={() => handleNavigation(`/product-details/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full relative md:h-[600px] h-[350px] sm:h-[300px] lg:h-[700px] xl:h-[800px]"
                />
                <div className="absolute right-0 bottom-0 bg-gray-900 bg-opacity-50 p-2 rounded-l-lg">
                  <h2 className="text-white text-center md:text-4xl text-2xl">{product.title}</h2>
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