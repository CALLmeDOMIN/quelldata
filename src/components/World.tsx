'use client';

import { useRef, memo, useMemo } from 'react';
import { motion } from 'motion/react';
import DottedMap from 'dotted-map';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  openForm: () => void;
}

const World = ({ dots = [], lineColor = '#0ea5e9', openForm }: MapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = useMemo(() => new DottedMap({ height: 100, grid: 'diagonal' }), []);

  const svgMap = () =>
    map.getSVG({
      radius: 0.22,
      color: '#00000040',
      shape: 'circle',
      backgroundColor: 'white'
    });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className="flex flex-col gap-16 p-4">
      <div className="flex flex-col flex-wrap gap-8">
        <h2 className="text-2xl font-bold text-slate-300 md:text-5xl">Your Dataset, Built by the World</h2>
        <p className="text-xl text-neutral-500 lg:w-xl">
          From cities to remote villages — our global community helps you gather diverse, real-world data at scale, with
          built-in validation and blockchain-based rewards.
        </p>
        <button
          onClick={openForm}
          className="w-60 transform cursor-pointer rounded-lg bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
        >
          Join the Waitlist
        </button>
      </div>

      <div ref={ref} className="relative aspect-[2/1] w-full rounded-lg bg-black font-sans">
        {inView && (
          <>
            <Image
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap())}`}
              className="pointer-events-none h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] select-none"
              alt="world map"
              height="495"
              width="1056"
              draggable={false}
              priority={true}
            />
            <svg
              ref={svgRef}
              viewBox="0 0 800 400"
              className="pointer-events-none absolute inset-0 h-full w-full select-none"
            >
              {dots.map((dot, i) => {
                const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                return (
                  <g key={`path-group-${i}`}>
                    <motion.path
                      d={createCurvedPath(startPoint, endPoint)}
                      fill="none"
                      stroke="url(#path-gradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.5 * i,
                        ease: 'easeOut'
                      }}
                    />
                  </g>
                );
              })}

              <defs>
                <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                  <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>

              {dots.map((dot, i) => (
                <g key={`points-group-${i}`}>
                  {['start', 'end'].map((key) => {
                    const pos = projectPoint(dot[key as 'start' | 'end'].lat, dot[key as 'start' | 'end'].lng);
                    return (
                      <g key={`${key}-${i}`}>
                        <circle cx={pos.x} cy={pos.y} r="2" fill={lineColor} />
                        <circle cx={pos.x} cy={pos.y} r="2" fill={lineColor} opacity="0.5">
                          <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    );
                  })}
                </g>
              ))}
            </svg>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(World);
