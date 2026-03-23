import './Services.css'
import { FaUser } from 'react-icons/fa';
import { FaPercent } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';

function Services() {
  return (
    <>
    <div className="servecis flex py-10 px-1">
      <div className="cont flex flex-col m-auto gap-10">
        <div className="top max-w-[546px] text-center m-auto">
          <h1 className='text-5xl font-bold'>Our Services</h1>
          <p className='text-xl text-zinc-900 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bottom flex gap-10 flex-wrap justify-center">
        <div className="servicesCard h-[201px] w-[261px] flex flex-col justify-center align-middle text-center gap-5">
          <FaTruck className='icon text-6xl text-(--color-green) translate-x-[170%]'/>
          <p className='text-2xl'>Delivery Services</p>
        </div>
        <div className="servicesCard h-[201px] w-[261px] flex flex-col justify-center align-middle text-center gap-5">
          <FaExchangeAlt className='icon text-6xl text-(--color-green) translate-x-[170%]'/>
          <p className='text-2xl'>Shipping & Return</p>
        </div>
        <div className="servicesCard h-[201px] w-[261px] flex flex-col justify-center align-middle text-center gap-5">
          <FaPercent className='icon text-6xl text-(--color-green) translate-x-[170%]'/>
          <p className='text-2xl'>Promotion</p>
        </div>
        <div className="servicesCard h-[201px] w-[261px] flex flex-col justify-center align-middle text-center gap-5">
          <FaUser className='icon text-6xl text-(--color-green) translate-x-[170%]'/>
          <p className='text-2xl'>24 Hours Service</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services