'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

interface FloatingCard {
  icon?: ReactNode;
  text?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  color?: string;
}

interface DynamicHeroProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
  floatingCards?: FloatingCard[];
  gradientFrom?: string;
  gradientTo?: string;
  height?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export default function DynamicHero({
  title,
  subtitle,
  highlightText,
  floatingCards = [],
  gradientFrom = 'from-sunset-orange/20',
  gradientTo = 'to-adventure-green/20',
  height = 'h-[60vh]',
  backgroundImage,
  children,
}: DynamicHeroProps) {
  const titleParts = highlightText
    ? title.split(highlightText)
    : [title];

  return (
    <section className={`relative ${height} md:h-[70vh] flex items-center justify-center ${!backgroundImage ? `bg-gradient-to-br ${gradientFrom} via-ocean-blue/20 ${gradientTo}` : ''} overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </>
      )}

      {/* Animated Background (only when no image) */}
      {!backgroundImage && <div className="absolute inset-0 bg-black/40"></div>}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-blue/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Cards */}
      {floatingCards.map((card, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:flex items-center gap-3 ${card.color || 'bg-white/10'} backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20`}
          style={card.position}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay: card.delay || 0, duration: 0.6 },
            y: {
              delay: card.delay || 0,
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {card.icon && (
            <div className="text-sunset-gold">
              {card.icon}
            </div>
          )}
          {card.text && (
            <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
              {card.text}
            </span>
          )}
        </motion.div>
      ))}

      {/* Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {titleParts[0]}
            {highlightText && (
              <motion.span
                className="text-sunset-gold inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {highlightText}
              </motion.span>
            )}
            {titleParts[1]}
          </h1>

          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-sand-beige max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 rounded-full bg-white/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
