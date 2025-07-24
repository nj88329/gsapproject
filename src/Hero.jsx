import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  
const container = useRef(null); 
  useGSAP(() => {
    const heading = container.current.querySelector("#heading");
    if (!heading) return;

    const split = new SplitText(heading, { type: "chars" });

    gsap.from(split.chars, {
      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 2.5,
      ease: "power2.out",
      repeat: -1,
      yoyo: true,
    });
  }, { scope: container });


 // creating the timeline for each grid
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".left-grid", {
      marginLeft:0,
      opacity: 1,
      duration: 1,
    }).to(".middle-box",{marginTop:0,
      opacity: 1,
      duration: 1,
    }).to(".right-grid",{marginLeft:0,
      marginTop : 0,
      opacity: 1,
      duration: 1, 
    })
    .to(".v-box", {
      // marginTop: 0,
      duration: 0.5,
    }, "-=0.5")
  }, { scope: container });








useGSAP(() => {
  const wrapper = container.current.querySelector(".v-box-wrapper");
  if (!wrapper) return;

  let boxes = gsap.utils.toArray(".v-box", wrapper);
  if (boxes.length === 0) return;

  const boxHeight = boxes[0].offsetHeight + 8;

  // Clone and prepend (reverse order)
  boxes.slice().reverse().forEach(box => {
    const clone = box.cloneNode(true);
    wrapper.prepend(clone);
  });

  // 🔁 Re-query ALL boxes including clones
  boxes = gsap.utils.toArray(".v-box", wrapper);

  const totalHeight = boxHeight * boxes.length;

  gsap.set(wrapper, { y: -totalHeight });

  const tween = gsap.to(wrapper, {
    y: 0,
    duration: boxes.length * 1.5,
    ease: "none",
    repeat: -1
  });

  // 🔄 Hover listeners for all boxes (original + clones)
  boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
      tween.pause();
      gsap.to(box, {
        scale: 1.3,
        opacity: 0.5,
        duration: 0.3,
        borderRadius :20,
        zIndex : 10,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        scale: 1,
        opacity: 1,
        zIndex : 1,
        duration: 0.3,
         borderRadius :0,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => tween.play()
      });
    });
  });
}, { scope: container });




//entire screen animation on entering the viewport
useGSAP(() => {
  const heroEl = container.current;

  gsap.fromTo(
    heroEl,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroEl,
         start: "top 50%",
        // end: "bottom center",
        toggleActions: "play reverse play reverse",
        
      },
    }
  );
}, { scope: container });


  return (
    <section ref={container} 
     
    className="Hero w-screen h-screen bg-gradient-to-b from-orange-900 to gray-500 grid grid-cols-6 text-white px-7">
      {/* Left Grid */}

      <div className="left-grid hidden sm:flex flex-col col-span-1 bg-gradient-to-t from-indigo-800 to-orange-900 border-r-[3px] border-b-[3px] border-gray-500 p-4 h-4/5 overflow-hidden scrollbar-hide">

         <div className="v-box-wrapper flex flex-col">
            <div className="v-box  bg-gradient-to-t   from-purple-900 to violet-800 h-[100px] text-center p-4 m-1">01</div>
            <div className="v-box  bg-gradient-to-t   from-purple-900 to violet-800 h-[100px] text-center p-4 m-1">02</div>
            <div className="v-box  bg-gradient-to-t   from-purple-900 to violet-800 h-[100px] text-center p-4 m-1">03</div>
            <div className="v-box  bg-gradient-to-t   from-purple-900 to violet-800 h-[100px] text-center p-4 m-1">04</div>
            </div>
          </div>
<div className="middle-box col-span-6 sm:col-span-4 sm:col-start-2 m-3 h-4/5 mt-10 flex flex-col items-center space-y-6 bg-gradient-to-r from-gray-800 from-20% via-violet-900 via-60% to-black-500 to-90%">
  
          {/* Navigation Bar */}
       <div className = 'bg-magenta-800   w-full h-30px '>
          <nav className="bg-white/30  shadow-md  px-4 py-1 rounded flex  justify-center gap-6  mt-3 opacity-20 ">
            <h5 className="font-medium text-black text-yellow-500">Product</h5>
            <h5 className="font-medium text-black text-yellow-500">Contact</h5>
          </nav>
       
       </div>
          {/* GSAP Heading */}
                  <div>
                        <h6 id='heading' className=" items-center  tracking-normal 
                        justify-center text-center font-semibold  text-7xl">
                            SHIPPING ANIMATIONS 
                          </h6>
                          {/* <Splines/> */}
                  </div>
        </div>
      {/* Right */}
     <div className="right-grid hidden sm:flex flex-col col-span-1 bg-gray-900 h-4/5 mt-1 border-l-[3px] border-b-[3px] border-red-500"> 
           
          </div>

    </section>
  );
};

export default Hero;
