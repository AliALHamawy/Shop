import './Footer.css'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer flex flex-col gap-10 flex-wrap bg-(--bg-dark) justify-between pt-10 ">
        <div className='max-w-[1220px] m-auto flex flex-col gap-10'>

          <div className="cont flex m-auto gap-10 flex-wrap border-b-[0.5px] border-zinc-600 mb-10">
            <div className="right w-[350px] flex flex-col gap-4 p-5 text-(--color-gray)">
              <h1 className="text-(--color-green) border-b-[0.5px] border-zinc-600 text-3xl font-bold p-2 m-3">Zay Shop </h1>
              <ul className='flex flex-col gap-4'>

                <li className='flex gap-1 text-2xl align-middle'><IoLocationSharp className='mt-1' /><p>123 Consectetur at ligula 10660</p></li>
                <li className='flex gap-1 text-2xl align-middle'><MdEmail className='mt-1' /><p>info@company.com</p></li>
                <li className='flex gap-1 text-2xl align-middle'><BsTelephoneFill className='mt-1' /><p>010-020-0340</p></li>
              </ul>

            </div>
            <div className="mid w-[350px] flex flex-col gap-4 p-5 text-(--color-gray)">
              <h1 className="border-b-[0.5px] border-zinc-600 text-3xl font-bold p-2 m-3">Products</h1>
              <ul className='flex flex-col gap-4'>
                <li className='text-2xl'>Luxury</li>
                <li className='text-2xl'>Sport Wear</li>
                <li className='text-2xl'>Men's Shoes</li>
                <li className='text-2xl'>Women's Shoes</li>
                <li className='text-2xl'>Popular Dress</li>
                <li className='text-2xl'>Gym Accessories</li>
                <li className='text-2xl'>Sport Shoes</li>
              </ul>
            </div>
            <div className="left w-[350px] flex flex-col gap-4 p-5 text-(--color-gray)">
              <h1 className="border-b-[0.5px] border-zinc-600 text-3xl font-bold p-2 m-3">Further Info</h1>
              <ul className='flex flex-col gap-4'>

                <li className='text-2xl'>Home</li>
                <li className='text-2xl'>About Us</li>
                <li className='text-2xl'>Shop Locations</li>
                <li className='text-2xl'>FAQs</li>
                <li className='text-2xl'>Contact</li>
              </ul>
            </div>
          </div>
          <div className="mide flex flex-col md:flex-row lg:flex-row gap-10  md:justify-between lg:justify-between px-3">
            <div className="left flex gap-3"><FaFacebookF className='text-[40px] text-(--color-gray) border-[0.5px] border-(--color-gray) p-2 rounded-full' /><FaInstagram className='text-[40px] text-(--color-gray) border-[0.5px] border-(--color-gray) p-2 rounded-full' /><FaGithub className='text-[40px] text-(--color-gray) border-[0.5px] border-(--color-gray) p-2 rounded-full' /><FaLinkedin className='text-[40px] text-(--color-gray) border-[0.5px] border-(--color-gray) p-2 rounded-full' /></div>
            <div className="right flex align-middle text-center justify-center">

              <input type="email" name="" id="" className='border border-(--color-gray) text-(--color-gray) px-2' placeholder='example@gmail.com' /> <button className='h-10.5 p-2 text-xl bg-(--color-green)'>Subscribe</button>
            </div>
          </div>
        </div>
          <div className="bottom bg-(--bg-darkest) h-20 py-6">
            <p className='max-w-[1220px] m-auto text-xl text-(--color-gray)'>Copyright © 2021 Company Name | Designed by <span className='border-b border-(--color-gray)'>TemplateMo</span></p>
          </div>
      </div>
    </>
  )
}

export default Footer