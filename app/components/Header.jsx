'use client'
import { useState } from "react"
import BurgerMenu from "./BurgerMenu"
import Drawer from "./Drawer"

const Header = () => {
 const [mobileNav, setMobileNav] = useState(false)
  return (
    <div className="text-white mb-10 xl:mb-24 h-[757px] md:h-[584px] xl:h-[647px] bg-[url('/images/header.png')] bg-no-repeat bg-cover md:bg-bottom bg-center font-poppins w-full">
        <BurgerMenu mobileNav={mobileNav} setMobileNav={setMobileNav}/>
        <Drawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
    </div>
  )
}

export default Header