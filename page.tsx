"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-farhan-black text-farhan-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full max-w-6xl mx-auto p-4">
          <motion.h1
            className="text-7xl md:text-9xl font-bold uppercase tracking-tighter"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Farhan
          </motion.h1>
          <motion.h1
            className="text-7xl md:text-9xl font-bold uppercase tracking-tighter"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ahmed
          </motion.h1>
        </div>
      </motion.section>

      {/* Fixed banner at bottom */}
      <div className="fixed bottom-0 left-0 w-full flex justify-between items-center p-6 z-10 bg-farhan-black bg-opacity-80 backdrop-blur-sm">
        <div className="text-sm font-light tracking-wider text-farhan-gray-light">
          MULTI-DISCIPLINARY DESIGNER & DEVELOPER
        </div>
        <div className="hidden md:flex space-x-4 text-sm font-light tracking-wider text-farhan-gray-light">
          <Link href="#" className="hover:text-farhan-green-light transition-colors duration-300">INSTAGRAM</Link>
          <Link href="#" className="hover:text-farhan-green-light transition-colors duration-300">TWITTER</Link>
          <Link href="#" className="hover:text-farhan-green-light transition-colors duration-300">LINKEDIN</Link>
        </div>
      </div>

      {/* Work Section */}
      <WorkSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
