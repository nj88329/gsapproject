import React,{ useEffect } from 'react'
import {  motion, useAnimation } from  'framer-motion';
import { useInView } from 'react-intersection-observer' ;


const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};


const childVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3   } },
};

const Items = () => {

   const control = useAnimation();
   const [ ref, inView ] = useInView() ;

    useEffect(()=>{
        if( inView )
        {
          control.start("visible");
        }else{
          control.start('hidden')
        }
    },[control, inView]);


  return (
    <div className = 'h-screen w-screen   bg-gradient-to-l from-orange-900  from-20% via-black via-40%  to-violet-700 to-90%  grid grid-rows-[60%_40%]   md:grid-rows-none  sm:grid-cols-[60%_40%] gap-1 rounded-xl'>
           <motion.div ref={ref} 
              variants={boxVariant}
                initial="hidden"
                animate={control} 
                className ='grid grid-rows-3 grid-cols-3 text-red-400 gap-1  rounded-lg ' >
                 <motion.div  variants={childVariant} className = 'top grid-cols-3  bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      first
                 </motion.div>
                  <motion.div  variants={childVariant}  className = 'top grid-cols-3  bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      sec
                 </motion.div>
                 <motion.div  variants={childVariant}  className = 'top grid-cols-3   bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      third
                 </motion.div>
                 
                  <motion.div  variants={childVariant}  className = 'top grid-cols-3  bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      first
                 </motion.div>
                  <motion.div  variants={childVariant}  className = 'top grid-cols-3 bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      sec
                 </motion.div>
                 <motion.div  variants={childVariant}  className = 'top grid-cols-3   bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      third
                 </motion.div>

                  <motion.div  variants={childVariant}  className = 'top grid-cols-3  gap-3 bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      first
                 </motion.div>
                  <motion.div  variants={childVariant}  className = 'top grid-cols-3   bg-black rounded-lg flex items-center justify-center hover:scale-[1.1] hover:bg-gray-800'>
                      sec
                 </motion.div>
                 <motion.div  variants={childVariant}  className = 'top grid-cols-3  bg-black rounded-lg flex items-center justify-center hover:scale-[1.1]  hover:bg-gray-800'>
                      third
                 </motion.div>
             </motion.div>
             <motion.div className =  'rightgrid border-2 border-yellow-700 z-[300]' >
             </motion.div>
    </div>
  )
}

export default Items
