"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const JournalGrid = () => {
  const { journal } = siteContent;

  return (
    <section id="journal" className="py-64 bg-brand-cream relative overflow-hidden">
      {/* Subtle Bamboo Texture */}
      <div className="absolute inset-0 bg-bamboo opacity-[0.03] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-48 gap-12">
          <div className="max-w-4xl">
            <span className="ui-label mb-10 block">Cerita Kami</span>
            <h2 className="editorial-xl text-brand-dark mb-10">
              {journal.title}
            </h2>
            <p className="text-2xl text-brand-dark/50 font-light leading-relaxed max-w-2xl">
              {journal.subtitle}
            </p>
          </div>
          <Link
            href="/journal"
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-peanut hover:text-brand-brown transition-colors group"
          >
            Baca Semua Cerita 
            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-24"
        >
          {journal.posts.map((post) => (
            <motion.div key={post.id} variants={fadeInUp} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-8 shadow-[0_20px_40px_rgba(42,33,28,0.05)] group-hover:shadow-[0_30px_60px_rgba(199,146,62,0.15)] transition-all duration-700">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[1px] w-8 bg-brand-peanut/30" />
                <span className="text-[10px] font-bold text-brand-peanut uppercase tracking-widest">
                  {post.date}
                </span>
              </div>
              <h3 className="text-3xl font-editorial mb-4 text-brand-dark group-hover:text-brand-peanut transition-colors duration-300 leading-tight">
                {post.title}
              </h3>
              <p className="text-brand-dark/60 font-light mb-8 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-brown group-hover:gap-4 transition-all duration-300">
                Baca Cerita <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JournalGrid;
