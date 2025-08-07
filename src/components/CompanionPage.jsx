import { useGSAP } from '@gsap/react'
import React, { useEffect , useState , useRef } from 'react';
import gsap from 'gsap';

import { NavLink } from 'react-router-dom';



const CompanionPage = () => {


const divRef = useRef(null);


  const [ companion , setCompanion ] = useState({
      name : '',
      subject : '',
      topic : ''
  });


  let [newCompanion , setNewCompanion ] = useState({
      name :'',
      subject:'',
      topic:''
  })

  useGSAP(()=>{
   gsap.fromTo('.cardRight',{
        y : 100 , opacity : 0   
   }, {
          y : 0 , opacity : 1,duration : 2 
   })
},[companion])




    useEffect(()=>{
     fetch("http://127.0.0.1:8000/")
     .then((res)=>res.json())
      .then((data)=>console.log(data.message))
      .catch((err) => console.error("Fetch error:", err));
    },[])


    useGSAP(()=>{ 
       gsap.fromTo('.form' , 
        { opacity : 0 ,y : 100 },
        {  opacity : 1, y : 0 , duration : 2}
       )
    },[])

  

      const handleChange = (e)=>{
                
       const { name , value} = e.target;        

        setNewCompanion((prevData)=>({
              ...prevData, 
              [name] : value
        }));
      };

      const companionData = ()=>{

        console.log('compa',companion)

            if( !newCompanion.name || !newCompanion.subject || !newCompanion.topic )
            {
              alert('Please input all fields')
              return;
            }
            setCompanion({...newCompanion});
              setNewCompanion({
                name: '',
                subject: '',
                topic: ''
              });

          console.log('submitting',companion  );
           
      }
  
   
   

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
            <div className = 'content flex flex-col h-screen  sm:flex-row items-center'>
              <div className = 'cover min-h-fit p-0 mb-0 sm:mb-5 sm:p-10 flex flex-col items-center opacity-85 bg-gray-400  sm:w-[50vw] h-[50vh] sm:h-[90vh]  rounded-2xl m-3'>
                <div className = 'form p-5  gap-6 h-full w-full rounded-lg border-2 border-yellow-300 my-auto bg-gradient-to-t from gray-600 from 20% via-red-400 via-60% to-cyan-300 to-90%  shadow-lg shadow-red-600 transition-shadow duration-300'> 
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
                          <input 
                           type = "text"
                           name = "name"
                           value = { newCompanion.name }
                          placeholder='Enter companion name'
                            onChange = { handleChange }
                        />
                        </div>
                  </div>
                   
                    <div className = 'rounded-lg '>
                      <h2 className = 'font-bold '>
                        Subject
                        </h2>
                        <div className='w-fit text-sm bg-green-200 hover:border-2 hover:scale-105' > 
                          <input placeholder="Enter the subject" 
                                type = "text"
                              name = "subject"
                           value = { newCompanion.subject }
                            onChange = { handleChange }
                            />
                        </div>
                    </div>
                    
                      <div className= ' rounded-lg hover:scale-105'>
                        <h2 className = 'font-bold '>
                        What should this companion teach?
                        </h2>
                        <div className='w-fit text-sm bg-green-200 hover:border-2 hover:scale-105' > 
                          <input 
                           className= 'rounded-lg' placeholder='Enter the topic'
                            type = "text"
                             name = "topic"
                             value = { newCompanion.topic }
                             onChange = { handleChange }
                          />
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
                
                       <button className='cursor-pointer bg-violet-500 w-full rounded-lg text-base font-bold' onClick={companionData}>
                               Build Companions
                       </button>
                    </div> 
                 </div>  
            
           
{companion.name && companion.subject && companion.topic && (
  <div className='cardRight opacity-70 flex flex-col items-center justify-center border-yellow-400 border-2 rounded-lg bg-gradient-to-r from-red-400 to-blue-700'>
    <div className='mt-2 rightcard flex flex-col rounded-xl bg-gradient-to-t  h-[15vh] w-[70vw] sm:h-[25vh] sm:w-[20vw] items-center justify-center'>
      <div className='flex flex-col'>
        <button className='bg-red-700 w-full rounded-2xl mb-2'>
          <h2 className='font-bold text-yellow-400'>{companion.name}</h2>
        </button>
        <button className='bg-red-700 w-full rounded-2xl mb-2'>
          <h2 className='font-bold text-yellow-400'>{companion.subject}</h2>
        </button>
        <button className='bg-red-700 w-full rounded-2xl mb-2'>
          <h2 className='font-bold text-yellow-400'>{companion.topic}</h2>
        </button>
      </div>
    </div>

    <div className='flex items-center p-3'>
      <NavLink to='/dashboard/interviewPage'>
        <div className='bg-green-400 flex items-center justify-center rounded-xl hover:bg-red-500 cursor-pointer scale-[1.5] hover:scale-[1.3]'>
          <h3 className='font-bold text-red-500 scale-[0.6] hover:scale-[0.8] hover:text-yellow-500'>
            Go to interview
          </h3>
        </div>
      </NavLink>
    </div>
  </div>)}
  </div>
</div>
)}

export default CompanionPage

