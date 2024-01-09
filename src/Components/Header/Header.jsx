import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <div className=' flex bg-black h-auto'>
          <div className='flex  align-center'>
            <img className='size-26 ml-3 mt-1' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/amazonLogo.svg" alt="" />
            <span className='text-white text-sm font-normal mt-5   '>.in</span>
          </div>
          <div className='ml-4'>
            <div className='flex mt-3 text-small mb-3'>
              <img className='size-5 mt-4 ' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/location.svg" alt="" />
              <p className='text-white text-sm  font-thin'>Delivering to Delhi 110002 <br />
                <span className='text-white font-bold text-base'>Updated location </span></p>
            </div>
          </div>
          <div className='flex border-white w-80 h-12 relative top-2 ml-3 rounded-md'>
            <div className=' w-16 h-full border-white '>
              <select className='w-full h-full text-balck border-none rounded-1-sm bg-gay-100 px-2' name="category" id="category">
                <option value="All categories">All categories</option>

              </select>
              

            </div>
            

          </div>
        </div>
      </header>
    </>
  )
}

export default Header