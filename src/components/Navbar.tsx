import { useState } from 'react'

const Navbar = () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Our Products", path: "/products" },
    { title: "Our Galleries", path:"/about/gallery"},
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/contact" }
  ]

  return (
    <nav className=" w-full   md:static ">
      <div className="items-center  mx-auto xl:flex  md:justify-between md:mb-6 ">

        <div className="flex items-center justify-between py-3   ">

          <a href="/" className='p-3  gap-3  rounded-2xl   text-white font-heading flex justify-center items-center'>
            <img src="/logo.png" className='h-32 lg:h-24 ' />
            <h1 className=" font-bold text-5xl hidden md:flex">Arks Pickles</h1>
          </a>

          <div className="xl:hidden ">
            <button className="text-white outline-none p-2 rounded-md "
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>

        </div>


        <div className={`w-full xl:w-auto flex justify-start pb-3 mt-8 xl:block xl:pb-0 xl:mt-0 ${state ? 'block  bg-secondary rounded-3xl' : 'hidden'}`}>
          <ul className="flex flex-col xl:flex-row justify-start items-start space-y-8 xl:space-y-0 xl:gap-8 p-3 xl:px-10 rounded-2xl xl:mx-5 text-white">
            {
              navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-white font-manrope xl:text-xl md:text-lg hover:text-blue-500">
                    <a href={item.path}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>


        <div className="hidden xl:inline-block ">
          <a href="tel:+918519958157" className="py-3 px-4 text-backgroundColor bg-white hover:bg-blue-500 hover:text-white   text-xl rounded-full font-heading shadow">
            (+91)85199 58157
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
