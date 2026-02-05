'use client';

import { useState } from 'react';
import { X, Sparkles, Users, Check } from 'lucide-react';
import Link from 'next/link';
import { companyInfo } from '@/data/company';

export default function PromoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Promo Banner - Clickable */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-sunset-orange via-red-500 to-sunset-gold text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-sunset-orange/30 transition-all duration-300 hover:scale-105 animate-pulse-subtle cursor-pointer border-2 border-white/20"
      >
        <Sparkles className="w-5 h-5 animate-bounce" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-bold text-lg">PROMO FEBRERO</span>
          <span className="text-white/90">Desde <span className="font-black text-2xl">50€</span>/persona</span>
        </div>
        <span className="text-sm text-white/80 hidden sm:inline">· Click para más info</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sunset-orange via-red-500 to-sunset-gold p-6 text-white text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <Sparkles className="w-10 h-10 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">PROMO FEBRERO</h3>
              <p className="text-white/90 mt-1">Oferta especial por tiempo limitado</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-stone-gray text-center mb-6">
                Vive la aventura en Jeep Wrangler a un precio increíble.
                <strong> Cuantos más seáis, más ahorráis.</strong>
              </p>

              {/* Price Cards */}
              <div className="space-y-3">
                {/* 4 personas - Best deal */}
                <div className="relative flex items-center justify-between p-4 bg-gradient-to-r from-adventure-green/10 to-adventure-green/5 rounded-xl border-2 border-adventure-green">
                  <div className="absolute -top-2 -right-2 bg-adventure-green text-white text-xs font-bold px-2 py-1 rounded-full">
                    MEJOR PRECIO
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <Users className="w-8 h-8 text-adventure-green" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-charcoal">4 personas</p>
                      <p className="text-sm text-stone-gray">Por Jeep</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-adventure-green">50€</p>
                    <p className="text-sm text-stone-gray">/persona</p>
                  </div>
                </div>

                {/* 3 personas */}
                <div className="flex items-center justify-between p-4 bg-ocean-blue/5 rounded-xl border border-ocean-blue/30">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-ocean-blue" />
                    <div>
                      <p className="font-bold text-lg text-charcoal">3 personas</p>
                      <p className="text-sm text-stone-gray">Por Jeep</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-ocean-blue">60€</p>
                    <p className="text-sm text-stone-gray">/persona</p>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-charcoal mb-2">Incluye:</p>
                <ul className="text-sm text-stone-gray space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-adventure-green" />
                    Jeep Wrangler para 3 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-adventure-green" />
                    Seguro a todo riesgo
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-adventure-green" />
                    Combustible incluido
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={companyInfo.fareharbor.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6"
              >
                <button className="w-full bg-gradient-to-r from-sunset-orange to-sunset-gold text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-sunset-orange/30 transition-all duration-300 hover:scale-[1.02]">
                  Reservar Ahora
                </button>
              </Link>

              <p className="text-xs text-center text-stone-gray mt-3">
                * Oferta válida durante febrero 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
