import './Hero.css'
import HeroInfo from './HeroInfo'
import { useState, useEffect, useRef } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Hero() {
  const [hero, setHero] = useState(HeroInfo)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const intervalRef = useRef(null)
  const trackRef = useRef(null)

  const extendedHero = [
    hero[hero.length - 1],
    ...hero,
    hero[0]
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTransitionEnabled(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTransitionEnabled(true)
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  useEffect(() => {
    if (!isAnimating) return

    const timeout = setTimeout(() => {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(hero.length)
      } else if (currentIndex === extendedHero.length - 1) {
        setTransitionEnabled(false)
        setCurrentIndex(1)
      }

      setTimeout(() => {
        setTransitionEnabled(true)
        setIsAnimating(false)
      }, 50)
    }, 500)

    return () => clearTimeout(timeout)
  }, [currentIndex, isAnimating, hero.length, extendedHero.length])

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 2500)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [hero.length])

  const getActualContent = () => {
    if (currentIndex === 0) return hero[hero.length - 1]
    if (currentIndex === extendedHero.length - 1) return hero[0]
    return hero[currentIndex - 1]
  }

  return (
    <>
      <div
        className="hero h-[694px] m-auto mt-24 md:mt-32 lg:mt-32 bg-(--hero-bg) px-10 flex overflow-hidden relative z-0"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <FaAngleLeft
          onClick={prevSlide}
          onTouchStart={(e) => {
            e.preventDefault()
            prevSlide()
          }}
          className='h-[30px] w-[30px] left-0.5 absolute top-[50%] translate-y-[-50%] text-(--color-green) arrowHero cursor-pointer hover:opacity-70 transition-opacity'
        />
        <FaAngleRight
          onClick={nextSlide}
          onTouchStart={(e) => {
            e.preventDefault()
            nextSlide()
          }}
          className='h-[30px] w-[30px] right-0.5 absolute top-[50%] translate-y-[-50%] text-(--color-green) arrowHero cursor-pointer hover:opacity-70 transition-opacity'
        />

        <div className="carousel-container overflow-hidden w-full">
          <div
            ref={trackRef}
            className="carousel-track flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {extendedHero.map((item, idx) => (
              <div key={idx} className="carousel-slide flex-shrink-0 w-full">
                <div className="container flex m-auto justify-center align-middle gap-13 max-w-[80%] mx-[5%] lg:mx-[15%]">
                  <div className="left h-[588px] w-[590px] flex flex-col align-middle justify-center">
                    <h1 className='text-(--color-green) text-5xl font-extralight mb-3'>{item.title}</h1>
                    <h2 className='text-3xl font-light'>{item.subTitle}</h2>
                    <p className='text-xl font-light text-zinc-600'>{item.para}</p>
                  </div>
                  <div className="right h-[588px] w-[588px] my-auto flex justify-center align-middle">
                    <img src={item.imgPath} alt="" className='max-w-[100%] h-auto my-auto' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {hero.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setTransitionEnabled(true)
                setCurrentIndex(idx + 1)
              }}
              onTouchStart={(e) => {
                e.preventDefault()
                if (isAnimating) return
                setIsAnimating(true)
                setTransitionEnabled(true)
                setCurrentIndex(idx + 1)
              }}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex - 1 === idx ||
                  (currentIndex === 0 && idx === hero.length - 1) ||
                  (currentIndex === extendedHero.length - 1 && idx === 0)
                  ? 'bg-(--color-green) w-4'
                  : 'bg-gray-400 hover:bg-gray-500'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero