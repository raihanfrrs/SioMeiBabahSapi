"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ProcessSection = () => {
  const { processSteps } = siteContent;

  return (
    <section className="py-24 bg-brand-yellow/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full md:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-editorial mb-8">
              From everyday ingredients to future-ready foods.
            </h2>
            <p className="text-xl text-brand-dark/70 mb-12 font-light leading-relaxed">
              We've reimagined the way food is made. By using science to mirror nature, we create fats that are identical in every way, except for the footprint they leave behind.
            </p>
            <button className="border-2 border-brand-dark px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-brand-cream transition-all duration-300">
              Learn the science
            </button>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full md:w-1/2 space-y-12"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="flex items-start gap-8"
              >
                <span className="text-4xl font-editorial text-brand-yellow font-bold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-brand-dark/60 font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
