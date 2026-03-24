import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categories from './Component/Home/Categories/Categories'
import FeaturedProduct from './Component/Home/FeaturedProduct/FeaturedProduct'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import AboutHero from './Component/About/AboutHero/AboutHero'
import Brands from './Component/Brands/Brands'
import Services from './Component/About/Services/Services'
import ShopLanding from './Component/Shop/ShopLanding'
import TopContact from './Component/Contact/TopContact/TopContact'
import BottomContact from './Component/Contact/BottomContact/BottomContact'
import Hero from './Component/Home/Hero/Hero'
import Product from './Component/Shop/Product/Product'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" 
          element = {
            <><Hero /><Categories /><FeaturedProduct/></>
          }
          />
          <Route path="/About" 
          element = {
            <><AboutHero /><Services /><Brands/></>
          }
          />
          <Route path="/Shop" 
          element = {
            <><ShopLanding/><Brands/></>
          }
          />
          <Route path="/Contact" 
          element = {
            <><TopContact/> <BottomContact /></>
          }
          />
        <Route path="/Product/:slug" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
