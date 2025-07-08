import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
 gsap.registerPlugin(SplitText);

const Hero = () => {
  
  const container = useRef(null); 

  let split = SplitText.create("#heading", { type: "chars" });

  gsap.from(split.chars, {
  y: -10,
  autoAlpha: 0,
  stagger: 0.05,
   duration: 1.5,
      ease: "power2.out",
      repeat: Infinity,
      yoyo: true
});


 
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

  const boxHeight = boxes[0].offsetHeight + 16;

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
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
         borderRadius :0,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => tween.play()
      });
    });
  });
}, { scope: container });




  return (
    <section ref={container} 
     
    className="w-full h-screen bg-black grid grid-cols-6 text-white ">
      {/* Left Grid */}

          <div  className="left-grid opacity-0 overflow-hidden bg-orange-800 flex flex-col p-4 h-4/5 ml-10 sm:flex">
             <div className="v-box-wrapper flex flex-col">
            <div className="v-box bg-blue-900 h-[100px] text-center p-4 m-2">01</div>
            <div className="v-box bg-blue-900 h-[100px] text-center p-4 m-2">02</div>
            <div className="v-box bg-blue-900 h-[100px] text-center p-4 m-2">03</div>
            <div className="v-box bg-blue-900 h-[100px] text-center p-4 m-2">04</div>
            </div>
          </div>

      <div className="middle-box bg-gray-800 col-span-4 col-start-2 m-3 h-4/5 mt-10 flex flex-col items-center  space-y-6">
  
          {/* Navigation Bar */}
      
          <nav className="bg-white/30  shadow-md  px-4 py-1 rounded flex  justify-center gap-6  mt-3 w-full opacity-20 ">
            <h5 className="font-medium text-black text-yellow-500">Product</h5>
            <h5 className="font-medium text-black text-yellow-500">Contact</h5>
          </nav>
    
          {/* GSAP Heading */}
                  <div className = ''>
                    
                  </div>
        </div>
      {/* Right */}
      <div className="bg-gray-900 h-4/5 mt-3 right-grid ml-10">Right</div>
    </section>
  );
};

export default Hero;
