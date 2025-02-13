

const Preview = () => {
  const description = `
    At Arks Pickles, we take pride in crafting a diverse range of pickles and laddus that bring the authentic taste of tradition to your table. 
    Our products are made with the finest ingredients, carefully selected and prepared to ensure the highest quality and flavor. 
    From our tangy Gongura Chicken Pickle to our wholesome Nuvulla Laddu, each product is a testament to our commitment to excellence.
    Whether you're looking for a spicy pickle to complement your meals or a sweet treat to satisfy your cravings, Arks Pickles has something for everyone.
  `;

  const closing = `
    Thank you for choosing Arks Pickles! We are excited to be part of your culinary journey and bring the flavors of tradition to your home. 
    Our team is dedicated to providing you with the best products and customer service. 
    We look forward to serving you and hope you enjoy our pickles and laddus as much as we enjoy making them for you. 
    Experience the taste of tradition with Arks Pickles!
  `;

  const Button = () => (
    <a
      href="/about"
      className="relative inline-flex items-center justify-center w-1/3 p-4 px-4 py-1 overflow-hidden font-medium text-violet-300 transition duration-300 ease-out border-2 border-green-500 rounded-2xl shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        View More
      </span>
      <span className="relative invisible">View More</span>
    </a>
  );

  return (
    <>
      {/* Mobile View */}
      <div className="flex md:hidden flex-col p-2 md:p-10">
        <h1 className="font-manrope text-5xl pt-10 pl-3 text-white font-semibold text-center">Our Kitchen</h1>
        <p className="text-justify py-3 m-5 text-gray-300">{description}</p>
        <Button />
        <p className="text-justify py-3 m-5 text-gray-300">{closing}</p>
      </div>

      {/* Desktop View */}
      <section className="py-20 hidden md:flex font-manrope">
        <div className="max-w-screen-xl mx-auto flex items-center gap-x-12">
          <div className="max-w-xl ml-5 lg:max-w-2xl">
            <h1 className="text-white text-[55px] font-semibold my-10 text-center">Our Kitchen</h1>
            <p className="my-10 text-lg text-gray-300 text-justify">{description}</p>
            <Button />
            <p className="my-10 text-lg text-gray-300 text-justify">{closing}</p>
          </div>
          <img
            src={"/Logo.png"} className="w-[350px]"
          />
        </div>
      </section>
    </>
  );
};

export default Preview;
