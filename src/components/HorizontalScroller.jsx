import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sections = [
  {
    title: 'Aerial precision',
    text: 'Detailed care with a light touch — like a drone capturing every angle.',
    color: 'from-emerald-100 to-emerald-50',
  },
  {
    title: 'Botanical balance',
    text: 'Naturally derived ingredients chosen for calm, clean performance.',
    color: 'from-amber-100 to-rose-50',
  },
  {
    title: 'Quiet luxury',
    text: 'Warm neutrals, soft textures, and simple rituals that feel special.',
    color: 'from-rose-100 to-emerald-50',
  },
  {
    title: 'Sustainable focus',
    text: 'Thoughtful packaging and mindful sourcing — beauty that’s better.',
    color: 'from-emerald-100 to-amber-50',
  },
];

function HorizontalScroller() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);

  useEffect(() => {
    // Ensure body uses vertical scroll but translates horizontally
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-gradient-to-b from-emerald-50 via-amber-50 to-rose-50">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`w-screen h-full flex items-center justify-center bg-gradient-to-br ${s.color}`}
            >
              <div className="max-w-xl px-8 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-emerald-950"
                >
                  {s.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-4 text-lg md:text-xl text-emerald-900/80"
                >
                  {s.text}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HorizontalScroller;
