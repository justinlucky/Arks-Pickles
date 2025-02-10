
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookForm from './pages/BookForm'
import TeamContact from './pages/TeamContact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import EmptyCart from './pages/EmptyCart'
import ProductDetail from './pages/ProductDetail'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/service/booking/:id" element={<BookForm />} />
          <Route path="/team-contact" element={<TeamContact/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product-details/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cart-empty" element={<EmptyCart/>} />
          <Route path="/check-out" element={<CheckOut/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
