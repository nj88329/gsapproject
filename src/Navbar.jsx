import React from 'react'



const Navbar = () => {

const constants = [ 'Home', 'Design' ,'Model' , 'Checkout' ];

   return (
   <header className = 'w-full py-5 sm:px-10 px-5 flex    justify-between items-center   bg-gradient-to-t from-violet-500 to-orange-800'> 
     <nav className='flex w-full'  >
      <div className = 'flex flex-1 gap-3 text-sm justify-center max-sm:hidden text-white text-2xl '>
        {constants.map((item, i)=>{
         return (
            <h3  className = 'cursor-pointer transition-all hover:text-red-400'>
              {item}
            </h3>)
        })}
        
      </div>
     </nav>
    </header>
  )
}

export default Navbar
