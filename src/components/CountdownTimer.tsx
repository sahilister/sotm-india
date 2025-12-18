'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const eventDate = new Date('2026-01-24T00:00:00').getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-2xl md:text-4xl font-bold mb-1 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-lg border border-white/20 min-w-[60px] md:min-w-[80px]">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-sm text-neutral-300 uppercase tracking-wider">{label}</div>
    </div>
  );

  return (
    <div className="mb-12">
      <p className="text-xs md:text-sm text-neutral-300 mb-3 md:mb-4">Event starts in</p>
      <div className="flex items-center justify-center gap-2 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-xl md:text-3xl font-bold text-white/50">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-xl md:text-3xl font-bold text-white/50">:</span>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <span className="text-xl md:text-3xl font-bold text-white/50">:</span>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}