import React,{useRef} from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import  Items  from './Items';

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {

  const bottomRef = useRef();
  let containerRef = useRef();
    


useGSAP(() => {

  // gsap.utils.toArray(".card").forEach((card) => {
  //   if (ScrollTrigger.isInViewport(card, 0.5)) {
  //     gsap.set(card, { opacity: 1, y: 0, x: 0 });
  //   }
  // });


           const tl = gsap.timeline();

  tl.to('.card0', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  })
  .to('.card1', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  })
  .to('.card2', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  });

})

    useGSAP(()=>{

      let tl = gsap.timeline();
      
      tl.fromTo(".leftgriddiv",{
             x:-100 
           },
           {
            x:0,
            duration:2, ease: 'power3.out' 
           }).fromTo(".rightgriddiv",{
             y:100
           },{
            y:0,
            duration :2, ease: 'power3.out' 
           },0.2)
    },[])


  return (
    <div  className=" w-full bg-gradient-to-t from-gray-800 via-violet-900 to-orange-500 p-1  mb-8"
        >
      
      {/* Navbar */}
      <nav className="p-2 w-full h-[8vh] bg-red-300 bg-opacity-30 flex  gap-6 text-sm sm:text-base">
        <h2 className = 'text-yellow-300  font-bold '>DASHBOARD</h2>
        <h3 className="text-white text-center mx-auto">HOME</h3>
            <NavLink to = {`/dashboard/learningcompanion`}>  
            <h3 className="text-white text-center cursor-pointer transition-all hover:text-red-400">Learning Companions</h3>
            </NavLink>
      </nav>


      {/* Cards Section */}
      <div ref={containerRef} className="dashboard-section flex flex-col min-h-fit  sm:flex-row  items-center sm:items-stretch gap-6 p-2 mb-2 
      justify-center bg-no-repeat bg-left  sm:bg-[length:auto]"  
       style={{ 
       
          backgroundImage: "url('/glairsforwebsite.jpeg')",
         
       }}>
        {/* Card */
        
        }
       
        {[
          { label: "Science", title: "Neural Network", color: "bg-red-500" },
          { label: "Computer", title: "DevOps", color: "bg-yellow-900" },
          { label: "Design", title: "Web", color: "bg-blue-400" }
        ].map((card, idx) => (
          // <div key={idx}   className= { `${card.color} transform card${idx} w-full sm:w-[300px] gap-3 h-[40vh] rounded-lg p-4 flex flex-col hover:scal2-125 hover:bg-yellow-400 hover:z-[200] transition-transform duration-300 `}>
       <div key={idx}
  className={`card${idx} ${card.color} transform w-full sm:w-[300px] gap-3 h-[40vh] rounded-lg p-4 flex flex-col hover:scal2-125 hover:bg-yellow-400 hover:z-[200] transition-transform duration-300 opacity-0 translate-y-10`}
>
       <div className="bg-black w-[80px] h-[30px] rounded-md flex items-center justify-center mb-2">
              <p className="text-gray-400 text-sm">{card.label}</p>
            </div>
            <h3 className="text-white text-sm sm:text-lg mb-4">{card.title}</h3>
            <div className="bg-red-400 h-[30px] rounded-lg flex items-center   justify-center hover:scale-105 hover:bg-yellow-300 transition-transform duration-300">
              <button className="text-white">Launch</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Split Section */}
      <div ref={bottomRef} className="flex flex-col  sm:flex-row gap-4 px-4 pb-6  text-sm sm:text-base lg:text-lg h-fit ">
        
        {/* Left Div (Recently Completed) */}
        <div className="leftgriddiv  sm:w-3/5 border-2 border-green-400 rounded-lg p-4  bg-opacity-10 ">
          <h6 className="text-green-500  font-bold text-center mb-4 ">Recently Completed</h6>
          
           <div className="w-full">
  {/* Header */}
              <div className="grid grid-cols-3 font-bold text-red-700 text-sm sm:text-base mb-2">
                <span className="text-gray-500 text-left">CHAPTER</span>
                <span className="text-gray-500 text-center">SUBJECT</span>
                <span className="text-gray-500 text-right ">DURATION</span>
              </div>

              {/* Data rows */}
              {[
                { chapter: 'Analyst', subject: 'Science', duration: '45 min' },
                { chapter: 'Neural Network', subject: 'Statistics', duration: '20 min' },
                { chapter: 'Git & GitHub', subject: 'Computer', duration: '40 min' },
                { chapter: 'Analyst', subject: 'Science', duration: '45 min' },
                { chapter: 'Neural Network', subject: 'Statistics', duration: '20 min' },
                { chapter: 'Git & GitHub', subject: 'Computer', duration: '40 min' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 font-bold text-sm sm:text-base py-1 "
                >
                  <span className="text-left text-red-700">{item.chapter}</span>
                  <span className="text-center text-white bg-orange-800 rounded-xl px-1 py-1">{item.subject}</span>
                  <span className="text-right text-red-700">{item.duration}</span>
                </div>
              ))}
            </div>

        </div>

        {/* Right Div */}
        <div className="rightgriddiv  w-[80%] sm:w-2/5 border-2 border-yellow-400 rounded-lg p-4  bg-opacity-10 flex flex-col ">
          {/* Placeholder */}
          <div className = 'rounded-full bg-opacity-80 bg-gradient-to-l from-green-700 via-orange-900 to-orange-900'>
          <h6 className="mx-auto w-fit mb-2  font-bold text-center text-red-500 md:items-stretch bg-black w-[90%] sm:w-[15vw] md:w-[20vw] lg:[25vw] md:items-stretch text-sm sm:text-base md:tet-lg flex items-center justify-center  rounded-md px-2 py-1">
                  Start Learning your way
          </h6>
          <div className = ' min-h-fit bg-yellow-500 w-[70%] flex flex-col mx-auto rounded-lg sm:items-stretch p-4 space-y-2 mb-2'>
                    <h2 className='text-center text-red-500 sm:text-sm md:text-base lg:text-lg font-bold mx-auto '>Building Personalize</h2>  
                        <h3 className='text-red-500 sm:text-sm md:text-base lg:text-lg font-bold mx-auto'> Learning</h3>
                        <small className="text-xs sm:text-sm text-center text-gray-700 truncate overflow-hidden whitespace-nowrap">
                                Pick an avatar with any voice and start learning
                         </small>
          </div>
          <div className = ' bg-yellow-400   flex items-center w-[70%] min-h-fit  flex-col p-4 mx-auto  rounded-lg  sm:items-stretch mb-3'>
          
             <h2 className='text-center text-red-500 sm:text-sm md:text-base lg:text-lg font-bold '>Building Personalize</h2>  
                        <h3 className='text-red-500 sm:text-sm md:text-base lg:text-lg font-bold mx-auto'> Learning</h3>
                        <small className=" text-xs sm:text-sm w-full text-center text-gray-700 truncate overflow-hidden whitespace-nowrap">
                                Pick an avatar with any voice and start learning
                         </small>
                                     
          </div>
          <button className = 'flex items-center justify-center w-[70%] rounded-xl mx-auto bg-black text-red-600 font-bold'>
                Make Connections
          </button>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Dashboard;


