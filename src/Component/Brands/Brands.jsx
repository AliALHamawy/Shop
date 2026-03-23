import { useRef } from 'react';
import './Brands.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

function Brands() {

    const scrollContainerRef = useRef(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const intervalRef = useRef(null)
    const [canScroll, setCanScroll] = useState(true)

    const brands = [
        "/assets/img/brand_01.png",
        "/assets/img/brand_02.png",
        "/assets/img/brand_03.png",
        "/assets/img/brand_04.png"
    ];

    const extendedBrands = [...brands, ...brands, ...brands, ...brands];

    const scrollLeft = () => {
        if (!canScroll || isAnimating) return;
        setIsAnimating(true)
        setCanScroll(false)
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = getScrollAmount()

            container.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            })

            setTimeout(() => {
                if (container.scrollLeft <= scrollAmount) {
                    container.scrollLeft = container.scrollWidth / 4 - scrollAmount
                }
                setIsAnimating(false);
                setTimeout(() => setCanScroll(true), 100)
            }, 500)

        }
    }

    const scrollRight = () => {
        if (!canScroll || isAnimating) return;
        setIsAnimating(true);
        setCanScroll(false);

        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = getScrollAmount();
            const maxScroll = container.scrollWidth - container.clientWidth;

            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });

            setTimeout(() => {
                if (container.scrollLeft >= maxScroll - scrollAmount) {
                    container.scrollLeft = (container.scrollWidth / 4) - scrollAmount;
                }
                setIsAnimating(false);
                setTimeout(() => setCanScroll(true), 100);
            }, 500);
        }
    };

    const getScrollAmount = () => {
        if (window.innerWidth >= 1024) return 810;
        if (window.innerWidth >= 768) return 810;
        return 320
    }

    const startAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            console.log("Auto scrolling...");
            if (!isAnimating && canScroll)
                scrollRight();
        }, 5500)
    }

    const stopAutoScroll = () => {
        if (intervalRef.current)
            clearInterval(intervalRef.current)
        intervalRef.current = null;
    }

    useEffect(() => {
        setTimeout(() =>{

            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current
                container.scrollLeft = container.scrollWidth / 4
            }
        },100)

        startAutoScroll()

        return () => stopAutoScroll()

    }, [])

    return (
        <>
            <div className="brands flex py-15 px-1 bg-(--bg-gray)" >
                <div className="cont flex flex-col m-auto gap-10">
                    <div className="top max-w-[546px] text-center m-auto">
                        <h1 className='text-5xl font-bold'>Our Brands</h1>
                        <p className='text-xl text-zinc-900 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="bottom flex ">
                        <FaAngleLeft className='m-auto text-xl text-zinc-700 transition-[0.3s] hover:text-(--color-green) cursor-pointer flex translate-y-[10%]' onClick={scrollLeft} />
                        <div className="brands-cont max-w-[295px] md:max-w-[712.53px] lg:max-w-[712.53px] overflow-hidden flex gap-6 md:gap-23 lg:gap-23 mx-3" ref={scrollContainerRef}>
                            {extendedBrands.map((brand, index) => (
                                <img
                                    key={index}
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    className='max-w-[55px] md:max-w-[110.25px] lg:max-w-[110.25px] grayscale-100 opacity-[0.5] hover:grayscale-0 hover:opacity-[1] transition-all duration-300 flex-shrink-0 cursor-pointer'
                                />
                            ))}
                        </div>
                        <FaAngleRight className='m-auto text-xl text-zinc-700 transition-[0.3s] hover:text-(--color-green) cursor-pointer flex translate-y-[10%]' onClick={scrollRight} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands