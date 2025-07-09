import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const container = useRef(null);



useGSAP(() => {

  const wrapper = container.current.querySelector(".v-box-wrapper");
  if (!wrapper) return;

  let boxes = gsap.utils.toArray(".v-box", wrapper);
  if (boxes.length === 0) return;

  const boxWidth = boxes[0].offsetWidth + 16; // include margin
  const totalWidth = boxWidth * boxes.length;

  // Clone boxes and append to the wrapper for seamless loop
  boxes.forEach((box) => {
    const clone = box.cloneNode(true);
    wrapper.appendChild(clone);
  });

  // Re-query boxes including clones
  boxes = gsap.utils.toArray(".v-box", wrapper);

  gsap.set(wrapper, { x: 0 });

  const tween = gsap.to(wrapper, {
    x: -totalWidth,
    duration: boxes.length * 1.5,
    ease: "none",
    repeat: -1
  });

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      tween.pause();
      gsap.to(box, {
        scale: 1.2,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => tween.play()
      });
    });
  });


  
}, { scope: container });


  return (
    <div
      ref={container}
      className="outerdiv min-h-screen w-full bg-gradient-to-l from-orange-900 via-gray-900 to-black 
      overflow-hidden flex flex-row justify-center px-4   mt-[0%]"
    >
      <div className="v-box-wrapper flex flex-row flex-nowrap w-max z-[10]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="v-box m-1 flex items-center justify-center rounded-full md:h-[250px] 
             md:w-[250px] sm:h-[120px] sm:w-[120px] bg-gradient-to-l from-green-900 to-violet-800 text-white text-center p-4 font-semibold"
          >
            All the people need to see my art
          </div>
        ))}
      </div>
      <div className = 'belowdiv h-3/5 w-full bg-gradient-to-r from-green-900 via-gray-800 to-black '>
          <div className = 'grid grid-cols-3'>
              <>
                
              </>
          </div>
      </div>
    </div>
  );
};

export default Carousel;
