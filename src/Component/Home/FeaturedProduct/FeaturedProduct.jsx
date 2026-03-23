import { useState } from 'react'
import './FeaturedProduct.css'
import ProductInfo from './Product'
import {FaStar} from "react-icons/fa"

function FeaturedProduct() {

  const [product, setProduct] = useState(ProductInfo)

  return (
    <>
      <div className="product mt-40 bg-(--bg-gray) py-20">
        <div className="container  m-auto text-center flex flex-col">
          <div className="top flex flex-col gap-10">
        <h1 className='text-5xl'>Featured Product</h1>
        <p className='text-xl'>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          <div className="bottom flex gap-8 py-15 m-auto flex-wrap justify-center">
            {product.map((item) => (
              <div className="productcard flex flex-col w-[300px] lg:w-[414px] md:w-[414px] bg-(--bg-white)" key={item.id}>
                <img src={item.imgPath} alt="" className='w-[300px] lg:w-[414px] md:w-[414px] max-h-[310.5px]'/>
                <div className="container p-4">
                  <div className='flex justify-between my-3 '>
                  <div className="stars flex gap-1"><FaStar className='text-amber-400 text-xl'/><FaStar className='text-amber-400 text-xl'/><FaStar className='text-amber-400 text-xl'/><FaStar className='text-amber-400 text-xl'/><FaStar className='text-amber-400 text-xl'/></div>
                  <div className="price text-[18px] text-zinc-400">{item.price}</div>
                </div>
                <div className="info flex flex-col text-left gap-1">
                  <h1 className="title text-3xl">{item.title}</h1>
                  <p className='text-zinc-400 text-[18px]'>{item.subTitle}</p>
                <p className='text-zinc-400 text-[18px]'>Reviews ({item.rev})</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProduct