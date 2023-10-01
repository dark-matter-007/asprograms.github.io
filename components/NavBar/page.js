import React from 'react'
import Image from 'next/image'
import dashImage from "@/components/Images/dashStackIcon.png"
import helpImage from "@/components/Images/helpIcon.png"
import appsImage from "@/components/Images/appsIcon.png"
import homeImage from "@/components/Images/homeIcon.png"
import Link from 'next/link'
import "@/components/typing.css"

function NavBar(properties) {
    function getActive() {
        if (properties.active == "dashstack") {
          
            return <div className=' flex space-x-3 w-fit mx-auto reflectBelow'>
            <Image src={dashImage} className=" animate-bounce border-r-2 rounded-lg pr-2 border-black/50 py-1 hue-rotate-240 invert drop-shadow-sm shadow-white cursor-no-drop transition-all duration-300" />
            <Link href="./">
                <Image src={homeImage} className=" drop-shadow-sm h-[30px] w-auto scale-90 shadow-white cursor-pointer hover:scale-110 transition-all duration-300" />
            </Link>
            <Image src={helpImage} className=" invert drop-shadow-sm shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
            <Image src={appsImage} className=" drop-shadow-sm h-[30px] w-[30px] shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
            </div> }

        else if (properties.active == "home") {
            
            return <div className=' flex space-x-3 w-fit mx-auto reflectBelow'>
            
            <Image src={homeImage} className=" animate-bounce border-r-2 rounded-lg pr-2 border-white/50 py-1 hue-rotate-240 drop-shadow-sm shadow-white cursor-no-drop transition-all duration-300" />
            <Link href="./DashStack">
                <Image src={dashImage} className=" invert drop-shadow-sm h-[30px] w-auto shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
            </Link>
            <Image src={helpImage} className=" invert drop-shadow-sm h-[30px] shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
            <Image src={appsImage} className=" drop-shadow-sm h-[30px] w-[30px] shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
            </div> 
        }

    }
  return (
            <div> {getActive()} </div>
  )
}

export default NavBar

