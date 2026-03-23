import './BottomContact.css'

function BottomContact() {
  return (
    <>
      <div className="bottomContact p-1">
        <form className="flex flex-col max-w-[800px] m-auto justify-center align-middle p-3 gap-2">
          <div className='flex md:flex justify-center md:gap-5 lg:gap-5 flex-wrap topDiv gap-2'>
            <div className='flex flex-col gap-1 '>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" placeholder='Enter your name...' className=' max-w-[741px]' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder='Enter your email...' className=' max-w-[741px]' />
            </ div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Subject:</label>
            <input type="text" name="name" id="name" placeholder='Enter your title...' className='min-w-[330px]' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="title">Subject:</label>
            <input type="text" name="title" id="title" placeholder='Enter your title...' className='min-w-[330px]' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="message">Message:</label>
            <textarea type="text" name="message" id="message" placeholder='Enter your title...' className='min-w-[330px]' />
          </div>
        </form>
      </div>
    </>
  )
}

export default BottomContact