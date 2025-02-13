import { Link } from "react-router-dom";
import servicesData from "../assets/services.json";

const ServicePreview = () => {
  return (
    <div className="p-5">
      <h2 className="text-white text-5xl font-bold text-center mb-10">Our Services</h2>
      <div className="flex flex-wrap gap-10 justify-center max-w-[1024px] items-center mx-auto py-10">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col items-center gap-2">
            <Link to={`/service-details/${service.id}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-[250px] h-[250px] rounded-lg shadow-lg shadow-gray-700 hover:shadow-gray-500"
              />
              <h3 className="text-gray-200 mt-3 text-xl text-center">{service.title}</h3>
              <p className="text-green-500 text-center mt-2">{service.slogan}</p>
            </Link>
          </div>
        ))}4
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default ServicePreview;