"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const JournalGrid = () => {
  const { journalPosts } = siteContent;

  return (
    <section className="py-24 bg-brand-cream border-t border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-editorial mb-4">Journal</h2>
            <p className="text-xl text-brand-dark/60">Stories from the frontier of food tech.</p>
          </div>
          <Link
            href="/journal"
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors"
          >
            Read all posts <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {journalPosts.map((post, i) => (
            <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-3 block">
                {post.date}
              </span>
              <h3 className="text-2xl font-editorial mb-4 group-hover:text-brand-yellow transition-colors">
                {post.title}
              </h3>
              <p className="text-brand-dark/60 font-light mb-6">
                {post.excerpt}
              </p>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JournalGrid;
