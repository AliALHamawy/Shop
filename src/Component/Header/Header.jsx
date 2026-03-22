import './Header.css'
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOppen, setIsMenuOppen] = useState(false)
  const handleMenuOppen = () => {
    setIsMenuOppen(!isMenuOppen)
  }
  const [isSearchOppen, setIsSearchOppen] = useState(false)
  const handleSearchOppen = () => {
    setIsSearchOppen(!isSearchOppen)
  }
  return (
    <>
      <nav className="header">
        <div className="topSection h-8 flex justify-between py-1.5 px-3">
          <div className="left flex gap-3 text-gray-400">
            <div className='flex gap-1'>
              <MdEmail className='mt-1'/>
              <p className=''>info@company.com</p>
            </div>
            <div className='flex gap-1 text-center align-middle justify-center'>
              <BsTelephoneFill className='mt-1'/>
              <p>010-020-0340</p>
            </div>
          </div>
          <div className="right flex gap-3 text-gray-400">
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
        <div className="bottomSection h-24 flex justify-between px-10 lg:px-12 py-3 max-w-[1320px] m-auto">
          <div className={`absSearch ${isSearchOppen? 'open': ''} w-[100vw] bg-(--bg-white) h-[80vh] mx-auto  mt-17`}>
            <input type="text" className='bg-(--color-gray)  h-[40px] w-[700px] mx-auto mt-30 p-3' placeholder='Search...' name="" id="" />
          </div>
          <div className="left text-(--color-green) font-medium text-5xl">Zay</div> 
          <div className="mid">
            <ul className='flex justify-between gap-10 md:gap-15 lg:gap-30 py-3'>
              <li className='text-xl'><Link to="/">Home</Link></li>
              <li className='text-xl'><Link to="/About">About</Link></li>
              <li className='text-xl'><Link to="/Shop">Shop</Link></li>
              <li className='text-xl'><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div className="right flex gap-3 py-5">
            <FaSearch className='cursor-pointer'onClick={handleSearchOppen}/>
            <FaShoppingCart className='shoppingCart cursor-pointer'/>
            <FaUser className='user cursor-pointer'/>
            <span className="absolute bg-(--color-gray)  w-4 h-4 rounded-full text-[10px] text-center align-middle translate-x-9 -translate-y-1.5 cursor-pointer">7</span>
            <span className="absolute bg-(--color-gray)  w-6 h-4 rounded-full text-[10px] text-center align-middle translate-x-15.5 -translate-y-1.5 cursor-pointer">+99</span>
          </div>
          <IoMdMenu className='menu text-3xl text-[#212934] hover:text-(--color-green) mt-3' onClick={handleMenuOppen}/>
          <div className= {`mobileNav flex-col mt-20 fixed ml-[-40px] bg-(--bg-white) w-[100vw] ${isMenuOppen? 'open': ''}`}>
            <div className="w-[80%] m-auto">
              <div className='mobileUl' >
            <ul className='flex  flex-col justify-between gap-10 md:gap-15 lg:gap-30 py-3 pl-4'>
              <li className='text-xl'><Link to="/">Home</Link></li>
              <li className='text-xl'><Link to="/About">About</Link></li>
              <li className='text-xl'><Link to="/Shop">Shop</Link></li>
              <li className='text-xl'><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div className="mobileIcon flex align-middle text-center gap-3 py-5 justify-between">
            <input type="text" placeholder='search...' className='bg-bg-(--color-gray)  p-2 w-100 h-8'/>
            <div className='flex gap-4 mt-2'>
              <FaSearch className='cursor-pointer' />
            <FaShoppingCart className='shoppingCart cursor-pointer'/>
            <FaUser className='user cursor-pointer'/>
            <span className="absolute bg-(--color-gray)  w-4 h-4 rounded-full text-[10px] text-center align-middle translate-x-10 -translate-y-1.5 cursor-pointer">7</span>
            <span className="absolute bg-(--color-gray)  w-6 h-4 rounded-full text-[10px] text-center align-middle translate-x-18 -translate-y-1.5 cursor-pointer">+99</span>
            </div>
          </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header