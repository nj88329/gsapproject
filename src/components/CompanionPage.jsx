import { useGSAP } from '@gsap/react'
import React from 'react';
import gsap from 'gsap';

const CompanionPage = () => {


    useGSAP(()=>{
           
       gsap.fromTo('.form' , 
        { opacity : 0 ,y : 100 },
        {  opacity : 1, y : 0 , duration : 2}
       )
         
    },[])


  return (
    <div className = 'min-h-screen flex flex-col bg-gradient-to-r from-violet-800 from-20% via-green via-50% to-orange-700 to-90% items-center '
        style={{ 
       
          backgroundImage: "url('/glairsforwebsite.jpeg')",
           backgroundRepeat :'no-repeat',
           backgroundSize:'100% 100%',
           backgroundPosition: "left left",
       }}
    >
          <nav className = 'w-screen h-[8vh] bg-gradient-to-r from-violet-900 from-20% via-gray-500 via-50% to-orange-700 to-90% flex flex-row p-3 mb-3' >
                 <h3 className = 'text-yellow-500 text-sm sm:text-base'>
                    Home
                 </h3>
                 <h3 className = 'flex items-center mx-auto text-yellow-500 text-sm sm:text-base' >
                    Learning Companions
                 </h3>
                 <h3 className = 'text-yellow-500 text-sm sm:text-base'>
                    My Journey
                 </h3>
          </nav> 
              
              <div className = 'cover min-h-fit  flex flex-col items-center opacity-75 bg-gray-400  sm:w-[50vw] h-[50vh] sm:h-[90vh]  rounded-2xl m-3'>
                <form className = 'form p-2 gap-4 h-fit w-fit rounded-lg border-2 border-yellow-300 my-auto bg-gradient-to-t from gray-600 from 20% via-red-400 via-60% to-cyan-300 to-90%  shadow-lg shadow-red-600 transition-shadow duration-300'> 
                  <h1 className= 'text-red-500 font-bold text-lg mb-2 sm:text-base text-center'>
                    COMPANION BUILDER
                  </h1>
                  <div className = 'flex flex-col rounded-lg '>
                    <h5 className='text-sm items-start font-bold'>
                        Companion Icon
                    </h5>
                   <button className ='bg-green-500  rounded-full cursor-pointer w-full font-bold hover:scale-105'> Upload Img</button> 
                  </div>
                  <div className='  rounded-lg hover:scale-105'>
                      <h2 className = 'font-bold '>
                        Companion Name
                        </h2>
                        <div className='w-fit text-sm bg-green-200 hover:border-2 hover:scale-105' > 
                          <input placeholder='Enter companion name'></input>
                        </div>
                  </div>
                   
                    <div className = ' rounded-lg '>
                      <h2 className = 'font-bold '>
                        Subject
                        </h2>
                        <div className='w-fit text-sm bg-green-200 hover:border-2 hover:scale-105' > 
                          <input placeholder='Enter the subject'></input>
                        </div>
                    </div>
                    
                      <div className= ' rounded-lg hover:scale-105'>
                        <h2 className = 'font-bold '>
                        What should this companion teach?
                        </h2>
                        <div className='w-fit text-sm bg-green-200 hover:border-2 hover:scale-105' > 
                          <input className= 'rounded-lg' placeholder='Enter the subject'></input>
                        </div>
                       </div>

                       <div className=' rounded-lg '>
                        <h2 className = 'font-bold '>
                             Voice Type
                        </h2>
                           <select name="Dropdown">
                             <option value='Female'> Female </option>
                             <option value='Male'> Male </option>
                             <option value='Diva'> T </option>
                           </select>
                       </div>
                    
                      <div className = ' rounded-lg '>
                        <h2 className = 'font-bold '>
                             Speaking Style
                        </h2>
                           <select name="Dropdown ">
                             <option value='Formal text-base'> Formal </option>
                             <option value='Casual text-base'> Casual </option>
                             <option value='Informal text-base'> Informal </option>
                           </select>
                       </div>
                       
                      <div className=' rounded-lg  '>
                        <h2 className = 'font-bold '>
                             Language
                        </h2>
                           <select name="Dropdown ">
                             <option value='Formal text-base'> English </option>
                             <option value='Casual text-base'> Hindi </option>
                             <option value='Informal text-base'> Gadwali </option>
                           </select>
                       </div>
                      
                       <button className='cursor-pointer bg-violet-500 w-full rounded-lg text-base font-bold'>
                               Build Companions
                       </button>

                    </form> 
              </div>
    </div>
  )
}

export default CompanionPage
