'use client';

import { useState } from 'react';
import { X, Sparkles, Users, Check } from 'lucide-react';

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
                      <p className="font-bold text-lg text-black">4 personas</p>
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
                      <p className="font-bold text-lg text-black">3 personas</p>
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
                <p className="text-sm font-semibold text-black mb-2">Incluye:</p>
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

              {/* CTA - WhatsApp con messaggio promo */}
              <a
                href="https://wa.me/34822684504?text=Hola!%20Me%20interesa%20la%20PROMO%20FEBRERO%20de%2050%E2%82%AC%2Fpersona.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20para%20reservar."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6"
              >
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Reservar por WhatsApp
                </button>
              </a>

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
