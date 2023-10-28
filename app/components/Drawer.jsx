import { HiMenu, HiOutlineX } from "react-icons/hi"
import {AiOutlineUser} from 'react-icons/ai'
import Link from "next/link"

function Drawer({ mobileNav, setMobileNav }) {
  return (
    <div>
      <div className={`${mobileNav ? 'left-0 top-0' : '-left-full'} md:hidden h-screen fixed top-0 bottom-0 transition-all ease-in-out duration-300 w-[60vw] bg-orange-300`}>
        <div className='flex flex-col h-full'>
          <button type='button' className=' text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={() => setMobileNav(false)}>           
            <HiOutlineX className=" text-4xl" />
            <span className=" sr-only">Close Menu</span>
          </button>
          <div className="text-black h-auto flex flex-col gap-6 pt-5 px-3 font-bold">
            <Link href="/" className="text-black font-semibold">Best Sellers</Link>
            <Link href="/" className="text-black font-semibold">Chocolate</Link>
            <Link href="/" className="text-black font-semibold">Gifts</Link>
            <Link href="/" className="text-black font-semibold">Sales and Deals</Link>
            <Link href="/" className="text-black font-semibold">Experience</Link>
            <Link href="/" className="text-black font-semibold">Grocery Aistle</Link>
          </div>
          <div className="mt-auto text-black mb-4 px-3">
          <div className="flex justify-start">
            <Link className="font-bold text-sm mr-3 flex space-x-2" href="/">
              <div className=" align-middle flex flex-col justify-center">
<AiOutlineUser className="text-2xl"/>
              </div>
              <div>Login</div>
            </Link>
            <Link className="font-bold text-sm flex space-x-2" href=""><span>Rewards</span></Link>
          </div>
             
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Drawer