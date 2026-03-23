import './AboutHero.css'

function AboutHero() {
    return (
        <>
            <div className="aboutHero flex min-h-152  bg-(--color-green)  mt-24 md:mt-32 ">
                <div className="flex max-w-[1320px] min-h-[414px] m-auto align-middle justify-center gap-4 flex-wrap p-2 text-center md:text-left lg:text-left py-10 ">

                <div className="left max-w-[816px] m-auto flex flex-col gap-4">
                    <h1 className='text-5xl font-bold text-(--bg-white)'>About Us</h1>
                    <p className='text-xl font-normal text-(--bg-white)'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="right w-[270px] h-[370px] md:h-[414px] md:w-[414px]  lg:h-[414px] lg:w-[414px] m-auto">
                    <img src="/assets/img/about-hero.svg" alt="" className=''/>
                </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero