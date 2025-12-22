'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, IndianRupee, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  const inrFormRef = useRef<HTMLFormElement>(null);
  const usdFormRef = useRef<HTMLFormElement>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    if (scriptsLoaded) return;

    // Load INR payment button script
    if (inrFormRef.current && inrFormRef.current.children.length === 0) {
      const inrScript = document.createElement('script');
      inrScript.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      inrScript.setAttribute('data-payment_button_id', 'pl_RsxsAuVLiRBfqt');
      inrScript.async = true;
      inrFormRef.current.appendChild(inrScript);
    }

    // Load USD payment button script
    if (usdFormRef.current && usdFormRef.current.children.length === 0) {
      const usdScript = document.createElement('script');
      usdScript.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      usdScript.setAttribute('data-payment_button_id', 'pl_RsxtpCWNQLwEGV');
      usdScript.async = true;
      usdFormRef.current.appendChild(usdScript);
    }

    setScriptsLoaded(true);
  }, [scriptsLoaded]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-neutral-slate opacity-90 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/50 to-primary pointer-events-none -z-10" />
        
        <div className="container mx-auto px-6 py-8 relative z-10">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Register for SOTM India 2026
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Choose the payment option depending on your residence status.
            </p>
          </motion.div>

          {/* Payment Options */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
            {/* INR Payment Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-accent/50 transition-all"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-accent/20 p-4 rounded-full">
                  <IndianRupee className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                Pay in INR
              </h2>
              <p className="text-neutral-300 text-center mb-6">
                For participants registering from India
              </p>
              <div className="flex justify-center">
                <form ref={inrFormRef} className="razorpay-form"></form>
              </div>
            </motion.div>

            {/* USD Payment Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-accent/50 transition-all"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-accent/20 p-4 rounded-full">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                Pay in USD
              </h2>
              <p className="text-neutral-300 text-center mb-6">
                For international participants
              </p>
              <div className="flex justify-center">
                <form ref={usdFormRef} className="razorpay-form"></form>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Registration Information</h3>
            <div className="space-y-3 text-neutral-200">
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>Secure payment processing powered by Razorpay</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>You will receive a confirmation email after successful payment</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>For any queries, please contact us at the event email</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>All payments are final and non-refundable</p>
              </div>
              <div className='flex items-start gap-3'>
                <span className="text-accent text-lg">●</span>
                <p>Please note that all financial transactions are happening through Rotten Grapes Pvt ltd, the main organiser of Foss4G Asia 2026.</p>
              </div>
            </div>
          </motion.div>

          {/* Interest Form CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-white text-lg mb-4 font-medium">
              Not ready to register? Fill out our interest form instead
            </p>
            <a 
              href="https://nc.stateofthemap.in/apps/forms/s/C55M4owYKENF4pS6aMMqY2mN" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 bg-accent text-secondary font-bold rounded-full shadow-lg hover:bg-highlight hover:shadow-xl transition-all transform hover:scale-105"
            >
              Interest Form
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

