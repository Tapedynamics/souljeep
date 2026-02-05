'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, Users, Check } from 'lucide-react';

export default function PromoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Block body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Promo Banner - Clickable */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-sunset-orange via-red-500 to-sunset-gold text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-sunset-orange/30 transition-all duration-300 hover:scale-105 animate-pulse-subtle cursor-pointer border-2 border-white/20"
      >
        <Sparkles className="w-5 h-5 animate-bounce" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-bold text-lg">FEBRUARY PROMO</span>
          <span className="text-white/90">From <span className="font-black text-2xl">50€</span>/person</span>
        </div>
        <span className="text-sm text-white/80 hidden sm:inline">· Click for more info</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sunset-orange via-red-500 to-sunset-gold p-3 text-white text-center">
              <Sparkles className="w-7 h-7 mx-auto mb-1" />
              <h3 className="text-xl font-bold">FEBRUARY PROMO</h3>
              <p className="text-white/90 text-sm">Limited time special offer</p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <p className="text-stone-gray text-center text-sm mb-3">
                Experience the Jeep Wrangler adventure at an incredible price.
                <strong> The more you are, the more you save!</strong>
              </p>

              {/* Price Cards */}
              <div className="space-y-2">
                {/* 4 people - Best deal */}
                <div className="relative flex items-center justify-between p-3 bg-gradient-to-r from-adventure-green/10 to-adventure-green/5 rounded-xl border-2 border-adventure-green">
                  <div className="absolute -top-2 -right-2 bg-adventure-green text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    BEST PRICE
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-adventure-green flex-shrink-0" />
                    <div>
                      <p className="font-bold text-base text-black">4 people</p>
                      <p className="text-xs text-stone-gray">Per Jeep</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-adventure-green">50€</p>
                    <p className="text-xs text-stone-gray">/person</p>
                  </div>
                </div>

                {/* 3 people */}
                <div className="flex items-center justify-between p-3 bg-ocean-blue/5 rounded-xl border border-ocean-blue/30">
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-ocean-blue flex-shrink-0" />
                    <div>
                      <p className="font-bold text-base text-black">3 people</p>
                      <p className="text-xs text-stone-gray">Per Jeep</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-ocean-blue">60€</p>
                    <p className="text-xs text-stone-gray">/person</p>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs font-semibold text-black mb-1.5">Includes:</p>
                <ul className="text-xs text-stone-gray space-y-0.5">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-adventure-green flex-shrink-0" />
                    Jeep Wrangler for 3 hours
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-adventure-green flex-shrink-0" />
                    Full insurance coverage
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-adventure-green flex-shrink-0" />
                    Fuel included
                  </li>
                </ul>
              </div>

              {/* CTA - WhatsApp with promo message */}
              <a
                href="https://wa.me/34614475604?text=Hi!%20I'm%20interested%20in%20the%20FEBRUARY%20PROMO%20at%2050%E2%82%AC%2Fperson.%20I'd%20like%20more%20info%20to%20book."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-3"
              >
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book via WhatsApp
                </button>
              </a>

              <p className="text-[10px] text-center text-stone-gray mt-2">
                * Offer valid during February 2026
              </p>

              {/* Close button - mobile friendly */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-2 py-2 px-4 border-2 border-stone-gray/20 text-stone-gray font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
