import React from 'react'

const Interview = () => {
  return (
    <div className = 'bg-gradient-to-r from-orange-900 from-30% via-gray-600 via-65% to-violet-900 to-90% h-screen  flex items-center justify-center'> 
          <div className = 'box p-4'>
                  <div className = 'rounded-full bg-purple-400 h-[50vh] w-[40vw] flex  justify-center items-center'>
                      <div className = 'bg-yellow-400  w-[20vw] h-[50vh]  rounded-l-full flex  justify-center items-center'>
                          <h2>
                             AI
                          </h2>
                      </div>
                      <div className = 'bg-gray-500  w-[20vw] h-[50vh]  rounded-r-full flex   items-center justify-center'>
                         <h2>
                             YOU
                         </h2>
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Interview
