import './Categories.css'

function Categories() {
  return (
    <>
    <div className="categories">
      <div className="container m-auto text-center flex flex-col mt-10 gap-10">
        <h1 className='text-5xl'>Categories of The Month</h1>
        <p className='text-xl'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="images flex gap-10 mt-10 flex-wrap justify-center">
          <div>
            <img src="/assets/img/category_img_01.jpg" alt="" className='max-w-[320px] max-h-[320px] rounded-full'/>
          <h1 className='text-xl  font-bold my-3'>Watches</h1>
          <button className='bg-(--color-green) text-(--color-white) text-xl p-2 rounded-sm cursor-pointer'>Go Shop</button>
          </div>
          <div>
            <img src="/assets/img/category_img_02.jpg" alt="" className='max-w-[320px] max-h-[320px] rounded-full'/>
          <h1 className='text-xl  font-bold my-3'>Watches</h1>
          <button className='bg-(--color-green) text-(--color-white) text-xl p-2 rounded-sm cursor-pointer'>Go Shop</button>
          </div>
          <div>
            <img src="/assets/img/category_img_03.jpg" alt="" className='max-w-[320px] max-h-[320px] rounded-full'/>
          <h1 className='text-xl  font-bold my-3'>Watches</h1>
          <button className='bg-(--color-green) text-(--color-white) text-xl p-2 rounded-sm cursor-pointer'>Go Shop</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Categories