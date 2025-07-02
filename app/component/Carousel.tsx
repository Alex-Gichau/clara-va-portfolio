"use client";
import Image from 'next/image';
import { useRef, useState, useEffect } from "react";

export default function Carousel() {
  const duration: number = 5000; // Duration for the transition in milliseconds
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const items = [
    {
      image: '/CRM.png',
      alt: 'Carousel Item 1',
      desc: 'Item 1 Description',
      buttonIcon: '/icon1.png'
    },
    {
      image: '/SM.png',
      alt: 'Carousel Item 2',
      desc: 'Item 2 Description',
      buttonIcon: '/icon2.png'
    },
    {
      image: '/Travel.jpg',
      alt: 'Carousel Item 3',
      desc: 'Item 3 Description',
      buttonIcon: '/icon3.png'
    },
  ];

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line
  }, [active]);

  const animate = (now: number) => {
    const timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-center h-full">
      {/* Item Image */}
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col items-center justify-center min-h-[400px] w-[800px] h-[400px]">
          <Image
            src={items[active].image}
            alt={items[active].alt}
            width={800}
            height={600}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {items.map((item, index) => (
          <button
            key={index}
            className={`p-2 rounded focus:outline-none group ${active === index ? 'ring-2 ring-indigo-400' : ''}`}
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span className="text-center flex flex-col items-center">
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                {item.buttonIcon && (
                  <Image src={item.buttonIcon} alt={item.desc} width={24} height={24} />
                )}
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">{item.desc}</span>
              <span className='block relative w-full bg-slate-200 h-1 rounded-full' role="progressbar" aria-valuenow={active === index ? progress : 0}>
                <span
                  className="absolute inset-0 bg-indigo-500 rounded-[inherit] transition-all"
                  style={{ width: active === index ? `${progress}%` : '0%' }}
                ></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}