'use client'

import { useState } from "react"
import {HiMenu, HiOutlineX} from "react-icons/hi" 
const BurgerMenu = ({mobileNav, setMobileNav}) => {
//mobile nav state

  return (
    <div>
     <button className="md:hidden cursor-pointer z-50" onClick={()=> setMobileNav(!mobileNav)}>
          {mobileNav ? (<HiOutlineX className=" text-4xl"/>) :(<HiMenu className=" text-4xl"/>) }
        </button>
    </div>
  )
}

export default BurgerMenu