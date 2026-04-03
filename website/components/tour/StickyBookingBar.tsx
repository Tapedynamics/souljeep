'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface StickyBookingBarProps {
  bookingUrl: string;
  whatsappUrl: string;
  price: number;
}

export default function StickyBookingBar({ bookingUrl, whatsappUrl, price }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <span className="text-xs text-stone-gray">Desde</span>
          <div className="text-lg font-bold text-sunset-orange">&euro;{price}</div>
        </div>
        <Link
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-sunset-orange hover:bg-sunset-gold text-white font-semibold py-3 px-4 rounded-xl transition-colors"
        >
          Reservar
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-xl transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
