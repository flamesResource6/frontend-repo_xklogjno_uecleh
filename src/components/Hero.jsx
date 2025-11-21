import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50">
      {/* Soft organic background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center lg:justify-start p-8 md:p-12">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm mb-4"
            >
              Naturally refined grooming
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-950"
            >
              Clean care for everyday elegance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-lg md:text-xl text-emerald-900/80"
            >
              Botanical formulas, gentle rituals, and a touch of playful luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#collection"
                className="rounded-full bg-emerald-700 text-white px-6 py-3 shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition"
              >
                Explore collection
              </a>
              <a
                href="#about"
                className="rounded-full bg-white/70 backdrop-blur px-6 py-3 text-emerald-900 border border-emerald-900/10 hover:bg-white transition"
              >
                Our philosophy
              </a>
            </motion.div>
          </div>
        </div>

        {/* Spline 3D Scene */}
        <div className="relative h-[50vh] lg:h-full">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Soft gradient overlay to blend scene */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-amber-50/80 to-transparent" />
    </section>
  );
}

export default Hero;
