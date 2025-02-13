import Banner from "../components/Banner"
import Details from "../components/Details"
import FooterDark from "../components/FooterDark"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div className="bg-primary flex flex-col gap-5">
      <Navbar/>
      <Banner/>
      <div className="mt-[-50px]">
        <Details/>
      </div>
      <FooterDark/>
    </div>
  )
}

export default Home