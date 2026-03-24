import { useState } from 'react'
import './ShopLanding.css'
import { FaAngleDown } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import proData from './Shopdata'
import { useNavigate } from 'react-router'

function ShopLanding() {
    const [productCard, setProductCard] = useState(proData)
    const [openCategory, setOpenCategory] = useState(null)
    const navigate = useNavigate()
    const handleClick = (item) => {
        const itemSlug = item.title.replace(/\s+/g, '-').toLowerCase()
        navigate(`/Product/${itemSlug}`,{
            state: {item}
        })
    }
    const toggleCategory = (categoryName) => {
        if(openCategory === categoryName) {
            setOpenCategory(null)
        }else {
            setOpenCategory(categoryName)
        }
    }
    return (
        <>
            <div className="cont px-10">
                <div className='shop m-auto mt-24 flex flex-col  lg:flex-row justify-between md:mt-32 lg:mt-32 max-w-[1320px] gap-5 mx-auto py-10'>
                <div className="leftTop min-w-[280px]">
                    <h1 className='text-3xl mb-5'>Categories</h1>
                    <hr className='mb-10 w-[220px] text-(--color-green)'/>
                    <ul className='flex flex-col gap-4'>
                        <li className=''>
                            <button href="" className='h-[30px] text-2xl text-center m-auto items-center flex justify-between w-[100%]' onClick={() => {toggleCategory('gender')}}>Gender
                                <FaAngleDown  className={`text-(--color-white) text-center bg-(--bg-dark) text-[22px] rounded-full transition-transform duration-300 cursor-pointer ${openCategory === 'gender' ? 'rotate-180' : ''}`}/>
                            </button>
                            <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${openCategory === 'gender' ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Men</li>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Women</li>
                            </ul>
                        </li>
                        <li className=''>
                            <button href="" className='h-[30px] text-2xl text-center m-auto items-center flex justify-between w-[100%]' onClick={() => {toggleCategory('sale')}}>Sale
                                <FaAngleDown  className={`text-(--color-white) text-center bg-(--bg-dark) text-[22px] rounded-full transition-transform duration-300 cursor-pointer ${openCategory === 'sale' ? 'rotate-180' : ''}`}/>
                            </button>
                            <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${openCategory === 'sale' ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Sport</li>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Luxury</li>
                            </ul>
                        </li>
                        <li className=''>
                            <button href="" className='h-[30px] text-2xl text-center m-auto items-center flex justify-between w-[100%]' onClick={() => {toggleCategory('product')}}>Product
                                <FaAngleDown  className={`text-(--color-white) text-center bg-(--bg-dark) text-[22px] rounded-full transition-transform duration-300 cursor-pointer ${openCategory === 'product' ? 'rotate-180' : ''}`}/>
                            </button>
                            <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${openCategory === 'product' ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Bag</li>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Sweather</li>
                                <li className='text-[18px] h-[30px] p-1 cursor-pointer hover:text-(--color-green)'>Sunglass</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="rightBottom flex flex-wrap gap-5 flex-col">
                    <div className="top flex justify-between">
                        <ul className='flex gap-3 text-xl '>
                            <li className='transition-[3s] hover:text-(--color-green)'>All</li>
                            <li className='transition-[3s] hover:text-(--color-green)'>Men's</li>
                            <li className='transition-[3s] hover:text-(--color-green)'>Women's</li>
                        </ul>
                        <select className='border outline-0 w-50 p-2  border-(--color-green) '>

                        {/* <optgroup className='border-(--color-green)'> */}
                            <option value="1" className='hover:bg-(--color-green)'>Featured</option>
                            <option value="2" className='hover:bg-(--color-green)'>A to Z</option>
                            <option value="3" className='hover:bg-(--color-green)'>Item</option>
                        {/* </optgroup> */}
                        </select>
                    </div>
                    <div className="cardsContainer flex flex-wrap justify-center gap-5">

                        {productCard.map((item) => (
                            <div className="card w-[306px] h-[550.66px] cursor-pointer" key={item.id} onClick={() => handleClick(item)}>
                                <div className="imageCont card max-w-[306px] overflow-hidden">

                                <img src={item.coverImg} alt="" />
                                </div>
                                <div className="flex flex-col gap-2 p-2">
                                    <h1 className='text-[18px] font-light'>{item.title}</h1>
                                    <p className='text-[18px] font-light px-2'>{item.sizes}</p>
                                    <div className='flex text-center m-auto'><FaStar className='text-amber-400 text-xl' /><FaStar className='text-amber-400 text-xl' /><FaStar className='text-amber-400 text-xl' /><FaStar className='text-zinc-400 text-xl' /><FaStar className='text-zinc-400 text-xl' /></div>
                                    <p className='flex text-center m-auto'>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ShopLanding