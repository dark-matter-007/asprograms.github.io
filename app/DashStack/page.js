import React from 'react'
import notifIcon from "@/components/Images/notificationIcon.png"
import Image from 'next/image';
import '@/components/typing.css'
import "@/components/typing.css"
import handshakeIcon from '@/components/Images/handshakeIcon.png'
import bookImage from '@/components/Images/bookIcon.png'
import NavBar from '@/components/NavBar/page';
import Link from 'next/link';

function Dash() {


  // function processVisitors() {
  //   const [visitors, setVisitorCount] = useState(0);
  //   getVisitors( (req, response) => {
  //     console.log ("internal val = ", response)
  //     setVisitorCount(response)
  //     console.log("The value of visitorCount was set to ", response)
  //   });
  //   console.log ("Value of visitors = ", visitors)
  //   return visitors;
  // }

  // const [visitorCount, setVisitorCount] = useState(0);

  // useEffect(() => {
  //   getVisitors((req, response) => {
  //     setVisitorCount(response); // Update the state with the response value
  //   });
  // }, []);

  return (
    <main className='h-fit w-screen bg-white'> 
      <div className=' bg-zinc-800 p-5 py-10 w-full'>
        <h1 className=' w-fit mr-auto ml-4 text-3xl fadeIn text-cyan-300 font-medium'> Keep Up Service </h1>
      </div>

      <div className=' w-[100px] h-[100px] bg-white translate-y-[-30px] rounded-full ml-auto mr-3'> </div>
      <div className=' flex place-content-evenly translate-y-[-100px]'>
      
      <p className=' text-zinc-800 ml-7 mt-5 w-[45%] text-center animate-pulse'> Join our keep up service <br/> and stay tuned with us <br/> and our latest updates! <br/><br/> <span className=' text-xl text-blue-700'> Tap the bell icon to enroll! </span> </p>
      
      <Link className=' ml-auto h-fit mr-8' href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__mmmKOtUOEYwMDBZME5BTVdHQVQ5TlFXNlNDN0sxNi4u">
        <Image src={notifIcon} className=' ml-auto h-fit mr-0 scale-150 translate-y-[-10px] bellShake hover:invert hover:scale-125 cursor-pointer transition-all duration-300'/>
      </Link>
      </div>


      <div className=' w-screen bg-zinc-200 py-4 pb-8 mb-[-17px]'> 
        <h1 className=' text-zinc-600 w-fit mx-auto my-auto '> <span className=' text-4xl translate-y-[5px] fadeIn text-green-500'>3</span>... Members are approved by now </h1>
      </div>

      <div className=' flex place-content-center z-20 bg-zinc-700 h-fit w-screen py-5 pb-8 pl-5 border-l-8 ml-2  rounded-tl-3xl border-l-zinc-200'>
          
            <div >
              <h1 className=' w-[70%] fadeIn'> Giving a large thanks, to our family! <br/> <br/> We are welcoming all the programmer mates skilled in any of these domains -</h1>
              <br/>
              <li className=' text-sm fadeIn text-cyan-100'> App development ( Windows ) </li>
              <li className=' text-sm fadeIn text-cyan-100'> Mobile development ( Flutter / Kotlin ) </li>
              <li className=' text-sm fadeIn text-cyan-100'> Web development (React.JS / Next.JS) </li>
              <li className=' text-sm fadeIn text-cyan-100'> Data Management & Automation </li>
              <br></br>
              <Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__mmmKOtUM0w5STVVTTFOWFhCOUI4U0M5TDhOMzRYSC4u">
              <div className=' ml-[5%] bg-gradient-to-r from-pink-400 to-blue-300 w-fit px-3 py-1 rounded-full drop-shadow-lg shadow-black hover:bg-white hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer'>
                  <h1 className=' text-zinc-700 font-medium'> Join AS Programs Team Now!</h1>
              </div>
              </Link>
            </div>
            <Image src={handshakeIcon} className=' hover:scale-110 cursor-pointer hover:invert duration-300 transition-all animate-pulse w-[70%] h-fit max-w-[250px] ml-auto mr-[5%]'/>
      </div>

      <div className=' bg-zinc-800/50 backdrop-blur-sm border-white/10 border-[1px] w-fit rounded-3xl ml-auto mr-4 transition-all duration-300 translate-y-[-36px] sm:translate-y-[-54px] sm:backdrop-blur-sm py-3 px-5 pt-5 pb-5 mb-[-122px]'>
        <h1 className=' w-fit mx-auto'> On the occasion of <br/> <span className=' text-center text-3xl text-green-300'>First 100 Visitors!</span>  </h1>
      </div>

      <div className=' bg-zinc-800 rounded-t-[20px] px-3 pb-10 pt-5 '>
        <h1 className=' w-fit mx-auto text-[150%] mt-[100px] sm:mt-10 sm:w-fit sm:mx-auto sm:text-[175%]'> We are live with our <br/> <span className=' text-2xl text-[150%] sm:text-[175%] text-blue-300'> Free Classes </span> </h1>
        <div className=' bg-zinc-700 mb-20 mt-10 w-fit mx-auto px-5 pt-3 pb-5 rounded-3xl  animate-breathe '>
          <h1> You are awaited in - <br/> <span className=' text-xl text-violet-300 animate-pulse transition-all'> Programming with Ashwin </span></h1>
          <br></br><h1> <span className=' text-lg text-pink-300'> What do we cover? </span> <br></br> <li> Programming in C </li> <li> Special Tricks and Shots </li> <li> Practice Ques and Projects</li> </h1>
        
         <Image src={bookImage} className=' translate-y-[-120px] ml-auto mr-[-60px] h-[100px] w-auto hover:scale-110 animate-pulse transition-all duration-300 cursor-pointer ' />

              <div className=' mx-auto mt-[-80px] bg-blue-200 w-fit px-3 py-1 rounded-full drop-shadow-lg shadow-black hover:bg-white hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer'>
                  <h1 className=' text-zinc-700 font-medium'> Register Now! </h1>
              </div>
        </div>
        
      <NavBar active="dashstack" />
      </div>

      <div className=' py-3 bg-zinc-900'>
        <h1 className=' w-fit mx-auto'> Hosted and Maintained by - <span className=' text-cyan-300'> Ashwin Sharma </span> </h1>
      </div>

    </main>
  )
}

export default Dash;