import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);




const Carousel = () => {
  const container = useRef(null);
 const containerRef = useRef(null);
 const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  const images = [
  "./src/assets/Firefly.png",
  "./src/assets/Firefly1.png",
  "./src/assets/Firefly2.png"
];
// Image switch interval
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []); // Only run once on mount

// Animate transitions
useEffect(() => {
  imageRefs.current.forEach((img, index) => {
    if (!img) return;

    if (index === currentIndex) {
      gsap.fromTo(
        img,
        { autoAlpha: 0, y: 50 },
        {
          y: 0,
           keyframes: [
            { autoAlpha: 0.5, duration: 0.5, ease: "power1.out" },
            { autoAlpha: 1, duration: 0.5, ease: "power1.out" }
           ],
          ease: "elastic.out(1, 0.7)", // ← springy bounce
        }
      );
    } else {
      gsap.to(img, {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.in",
      });
    }
  });
}, [currentIndex]);

useGSAP(() => {
    const wrapper = container.current.querySelector(".v-box-wrapper");
    if (!wrapper) return;

    let boxes = gsap.utils.toArray(".v-box", wrapper);
    if (boxes.length === 0) return;

    const boxWidth = boxes[0].offsetWidth + 16;
    const totalWidth = boxWidth * boxes.length;

    boxes.forEach((box) => { 
      const clone = box.cloneNode(true);
      wrapper.appendChild(clone);
    });

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
      className="outerdiv min-h-screen min-w-screen bg-gradient-to-l from-orange-900 via-gray-900 to-black 
      overflow-hidden flex flex-col "
    >
      <div className="v-box-wrapper flex flex-row flex-nowrap w-max z-10 overflow-hidden">
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

      <div className="belowdiv h-[400px] w-full flex flex-row overflow-hidden mt-2">
        <div className="belowdivchild bg-gradient-to-l from-red-900 to-purple-900  w-[50%]">
          <div className="h-[400px] bg-gradient-to-r from-orange-500 via-purple-800  to-black rounded-l-lg flex flex-col pl-2 pt-2  border-red-900">
            <h1 className="p-4 text-white text-2xl hover:text-red-400 hover:bg-gray-400 transition-colors font-extrabold duration-100 ">
              <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                    1.) Choose and start a project
              </span>
            
              </h1>
            <h1 className = 'p-4 text-white text-xl font-extrabold hover:text-red-400 hover:bg-gray-400 transition-colors duration-100'>
              <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                            3.) Work on projects  
              </span>
             </h1>

              <h1 className="p-4 text-white font-bold text-xl hover:text-red-400 hover:bg-opacity-50 hover:bg-gray-400 transition-all duration-200 transform hover:font-scale-105">
                        <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                            3.) Submit the work
                          </span>
                </h1>
          </div>
        </div>

        <div  className="belowdivchild h-[400px] bg-gradient-to-r from-black via-orange-900 to-purple-700 rounded-l-lg w-[50%] border-l-[3px] border-red-900">
         <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
          {images.map((src, i) => (
            <img
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              src={src}
              alt={`Firefly ${i}`}
              className="absolute m-3  w-[80%] h-[80%] object-cover opacity-0"
              style={{ pointerEvents: "none" }}
            />
          ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
