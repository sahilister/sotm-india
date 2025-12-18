'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import Link from 'next/link';

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-16 overflow-hidden bg-primary">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-neutral-slate opacity-90" />
      
      {/* Geometric Map Pattern Overlay - Contour Lines */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("${basePath}/contour.svg")`, 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/50 to-primary pointer-events-none" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8 md:mb-12 px-4">
             <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                <img src={`${basePath}/images/logo.svg`} alt="State of the Map India 2026 Logo" className="h-20 md:h-32 w-auto drop-shadow-lg" />
             </div>
             <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
             <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                <img src={`${basePath}/images/foss4g_asia_2026_logo.png`} alt="FOSS4G Asia 2026 Logo" className="h-20 md:h-32 w-auto drop-shadow-lg" />
             </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF9933] to-white">
              State of the Map
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light via-white to-highlight">
              India 2026
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Celebrating mapping, geospatial technology, and community collaboration in India.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-sm md:text-base text-neutral-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>January 24th, 2026</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Nashik Engineering Cluster, India</span>
            </div>
          </div>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-highlight text-primary font-bold rounded-full shadow-lg hover:bg-white transition-all flex items-center gap-2 group"
            >
              Register Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://nc.stateofthemap.in/apps/forms/s/C55M4owYKENF4pS6aMMqY2mN" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md rounded-full font-medium transition-all"
            >
              Interest Form
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
