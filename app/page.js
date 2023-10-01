import React from "react"
import "../components/typing.css"
import Logo from "../components/ASProgramsLogo.png"
import dashImage from "../components/Images/dashStackIcon.png"
import helpImage from "../components/Images/helpIcon.png"
import appsImage from "../components/Images/appsIcon.png"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/NavBar/page"

export default function Home() {
  return (
    <main className=' w-screen h-screen p-5 transition-all duration-500'>
          <h5 className=" mt-[-10px] w-fit mx-auto text-sm fadeIn"> || ..Under Development.. ||</h5>
          
            <h1 className='text-xl h-fit py-2 w-fit typing_no_reflection text-white mx-auto mb-[-15px] mt-[200px]'> Welcome to... </h1>
            <h1 className=' text-5xl text-cyan-300 h-fit py-2 w-fit typing mx-auto  transition-all duration-200  '> AS Programs </h1>
            <br></br>
            
            <div className= " animate-breathe w-fit mx-auto mt-10 fadeIn border-t-2 pt-4 rounded-2xl mb-[150px] px-4 border-b-2 pb-4">
              <h1 className=" w-fit "> Total Visits : <span className=" text-3xl text-green-300"> 91 </span></h1>
              <h1 className=" w-fit mt-2"> Avg Rating : <span className=" text-2xl text-green-300"> 4.2 </span></h1>
            </div>
{/* 
            <div className=" space-x-3 fadeIn reflectBelow bg-zinc-800 mt-[200px] mb-0 w-fit mx-auto py-3 px-5 rounded-full flex">
              
              <Link href="./DashStack">
              <Image src={dashImage} className=" invert drop-shadow-sm shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
              </Link>

              <Image src={helpImage} className=" invert drop-shadow-sm shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
              <Image src={appsImage} className=" animate-pulse drop-shadow-sm h-[30px] w-[30px] shadow-white cursor-pointer hover:scale-125 transition-all duration-300" />
            </div> */}

            < NavBar active="home" />

    </main>
  )
}
