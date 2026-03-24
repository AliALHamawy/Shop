import './Product.css'
import proData from '../Shopdata'
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'

function Product() {
    const [products, setProducts] = useState(proData)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const product = products[0]
    const [quantity, setQuantity] = useState(1)
    const [productCard, setProductCard] = useState(proData)
    const navigate = useNavigate()
    const scrollContainerRef = useRef(null)


    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const handleClick = (item) => {
        const itemSlug = item.title.replace(/\s+/g, '-').toLowerCase()
        navigate(`/Product/${itemSlug}`, {
            state: { item }
        })
    }

    const increase = () => {
        setQuantity((e) => e + 1)
    }
    const decrease = () => {
        setQuantity((e) => quantity > 1 ? e - 1 : 1)
    }

    const nextImage = () => {
        if (product && product.productImges) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === product.productImges.length - 1 ? 0 : prevIndex + 1
            )
        }
    }

    const prevImage = () => {
        if (product && product.productImges) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? product.productImges.length - 1 : prevIndex - 1
            )
        }
    }

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            })
        }
    }

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px threshold
        }
    }

    const handleWheel = (e) => {
        if (scrollContainerRef.current) {
            e.preventDefault()
            scrollContainerRef.current.scrollBy({
                left: e.deltaY > 0 ? 100 : -100,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            container.addEventListener('scroll', checkScrollPosition)
            container.addEventListener('wheel', handleWheel, { passive: false })
            checkScrollPosition()

            return () => {
                container.removeEventListener('scroll', checkScrollPosition)
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [])

    return (
        <>
            <div className="product">

                <div className="top bg-(--bg-gray) flex m-auto mt-24 md:mt-32 lg:mt-32">
                    <div className="m-auto my-10 m-w-[1220px] flex gap-3 px-4 flex-wrap mf:flex-nowrap lg:flex-nowrap">
                        <div className="left max-w-[500px] my-auto m-auto">
                            <div className="main-image-container flex m-auto items-center ">
                                {product && product.productImges && (
                                    <img
                                        src={product.productImges[currentImageIndex]}
                                        alt={`${product.title}`}
                                        className='main-image w-full max-w-[350px] md:max-w-[400px] lg:max-w-[400px] h-auto m-auto'
                                    />
                                )}
                            </div>
                            <div className="cont flex mt-4">
                                <FaAngleLeft className='m-auto text-xl text-zinc-700 transition-[0.3s] hover:text-(--color-green) cursor-pointer flex translate-y-[10%]' onClick={prevImage} />
                                <div className=" max-w-[295px] md:max-w-[400px] lg:max-w-[400px] overflow-hidden flex gap-6 mx-3">
                                    {/* Show thumbnails */}
                                    {product && product.productImges && product.productImges.map((img, imgIndex) => (
                                        <div className="imagesScroll" key={imgIndex} onClick={() => setCurrentImageIndex(imgIndex)}>
                                            <img
                                                src={img}
                                                alt={`${product.title} - ${imgIndex + 1}`}
                                                className={`max-w-[55px] md:max-w-[80px] lg:max-w-[80px] transition-all duration-300 flex-shrink-0 cursor-pointer ${currentImageIndex === imgIndex
                                                    ? 'grayscale-0 opacity-100 border-2 border-(--color-green)'
                                                    : 'grayscale-100 opacity-[0.5] hover:grayscale-0 hover:opacity-[1]'
                                                    }`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <FaAngleRight className='m-auto text-xl text-zinc-700 transition-[0.3s] hover:text-(--color-green) cursor-pointer flex translate-y-[10%]' onClick={nextImage} />
                            </div>
                        </div>
                        <div className="flex flex-col right md:max-w-[600px] lg:max-w-[700px] bg-(--bg-white) p-6 gap-4 m-auto">
                            <h1 className='text-3xl'>Active Wear</h1>
                            <p className='text-2xl text-[#222425b7]'>$25.00</p>
                            <div className="flex gap-2 text-xl text-center items-center">

                                <div className='flex '><FaStar className='text-amber-400 text-xl' /><FaStar className='text-amber-400 text-xl' /><FaStar className='text-amber-400 text-xl' /><FaStar className='text-zinc-400 text-xl' /><FaStar className='text-zinc-400 text-xl' /></div>
                                <p className='abcde text-[18px] text-[#222425b7] mt-1'>Rating 4.8 | 36 Comments</p>
                            </div>
                            <div className="flex gap-2 text-2xl"><span>Brand:</span> <span className='text-[#6c757d]'>Easy Wear</span></div>
                            <div>
                                <h1 className='text-2xl'>Description:</h1>
                                <p className='text-xl text-[#222425b7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Avaliable Color:</h1>
                                <p className='text-xl text-[#222425b7]'>White / Black</p>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Specification:</h1>
                                <p className='text-xl text-[#222425b7]'>Lorem ipsum dolor sit <br />
                                    Amet, consectetur<br />
                                    Adipiscing elit,set<br />
                                    Duis aute irure<br />
                                    Ut enim ad minim<br />
                                    Dolore magna aliqua<br />
                                    Excepteur sint</p>
                            </div>
                            <div>
                                <div className="flex justify-between flex-wrap md:flex-nowrap lg:flex-nowrap gap-5">
                                    <div className='flex gap-6 text-center items-center'>
                                        <h1 className='text-xl'>Size: </h1>
                                        <div className="flex gap-5">
                                            <span className='flex items-center text-center justify-center text-xl h-[30px] w-[30px] bg-(--color-green) rounded-md text-(--color-white)'>S</span>
                                            <span className='flex items-center text-center justify-center text-xl h-[30px] w-[30px] bg-(--color-green) rounded-md text-(--color-white)'>M</span>
                                            <span className='flex items-center text-center justify-center text-xl h-[30px] w-[30px] bg-(--color-green) rounded-md text-(--color-white)'>L</span>
                                            <span className='flex items-center text-center justify-center text-xl h-[30px] w-[30px] bg-(--color-green) rounded-md text-(--color-white)'>XL</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-6 text-center items-center'>
                                        <h1 className='text-xl'>Quantity: </h1>
                                        <div className="flex gap-5">
                                            <span className='flex items-center text-center justify-center text-xl h-[30px] w-[30px] bg-(--color-green) cursor-pointer rounded-md text-(--color-white)' onClick={decrease}>-</span>
                                            <span className='bg-gray-500 flex items-center text-center justify-center text-md h-[20px] w-[20px] mt-1 p-3 rounded-sm text-(--color-white)'>{quantity}</span>
                                            <span className='flex items-center text-center justify-center text-xl h-[30px] w-[30px] bg-(--color-green) cursor-pointer rounded-md text-(--color-white)' onClick={increase}>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1 justify-between mt-7">
                                    <button className='w-[48%] text-center bg-(--color-green) p-2 rounded-lg text-xl text-(--color-white)'>Buy</button>
                                    <button className='w-[48%] text-center bg-(--color-green) p-2 rounded-lg text-xl text-(--color-white)'>Add To Card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    {/* {canScrollLeft && (
                        <button
                            className="scroll-btn scroll-left"
                            onClick={scrollLeft}
                            aria-label="Scroll left"
                        >
                            <FaAngleLeft />
                        </button>
                    )} */}

                    {/* {canScrollRight && (
                        <button
                            className="scroll-btn scroll-right"
                            onClick={scrollRight}
                            aria-label="Scroll right"
                        >
                            <FaAngleRight />
                        </button>
                    )} */}
                    <div className="cont max-w-[990px] flex m-auto gap-7 overflow-hidden"
                        ref={scrollContainerRef}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            overflowX: 'auto',
                            scrollBehavior: 'smooth',
                            cursor: 'grab'
                        }}>

                        {productCard.map((item) => (
                            <div className="card min-w-[225px] min-h-[300px] cursor-pointer my-10" key={item.id} onClick={() => handleClick(item)}>
                                <div className="imageCont max-w-[270px] overflow-hidden">

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
        </>
    )
}

export default Product