import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

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
          <div className='flex w-80 h-12 relative top-2 ml-4 rounded-md '>
            <div className=' w-14 h-full '>
              <select className='w-full h-full text-balck border-none rounded-sm bg-gray-200 px-2' name="category" id="category">
                <option value="allCategories">All categories</option>
                <option value="alexaSkills">Alexa Skills</option>
                <option value="amazonDevice">Amazon Device</option>
                <option value="amazonFashion">Amazon Fashion</option>
                <option value="amazonFresh">Amazon Fresh</option>
              </select>
            </div>
            <div className='bg-white w-48  flex  items-center '>
              <span className='ml-3 font-normal text-lg'> Search Amazon.in   </span>
            </div>
            <div className='w-14 bg-yellow-500 '>
              <img className='relative top-3 left-4' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/seacrh.svg" alt="" />
            </div>
          </div>
          <div className='dropdown'>
            <div className=' flex w-14 border-none justify-center items-center ml-0 mt-5'>
              <img className='size-5' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/indiaFlagIcon.svg" alt="indian flag" />
              <span className='text-white '>EN</span>
            </div>
            <div className="dropdown-content text-black list-none">
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" checked />English- EN </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />हिन्दी - Hi </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />தமிழ் - TA </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />తెలుగు - TE </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />ಕನ್ನಡ - KN </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />മലയാളം - ML </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />বাংলা - BN </Link></li>
              <li> <Link to=""> <input type="radio" name="localLang" id="localLang" />मराठी - MR </Link></li>
            </div>
          </div>
          <div className='dropdown'>
            <div className=' w-full ml-5 leading-none pt-4 '>
              <p className='text-xs text-white'> Hello,Sign in</p>
              <h3 className='text-white font-bold'>Accounts & List</h3>
            </div>
            <div className='dropdown-content text-black list-none mt-1'>
              <div className='flex w-full justify-center'>
                <Link to="">
                  <button className='bg-[#FFD814] w-32 p-2 rounded-md font-bold'>
                    Sign in
                  </button>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </header >
    </>
  )
}

export default Header