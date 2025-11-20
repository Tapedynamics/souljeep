import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'white' | 'sand' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  className,
  containerSize = 'lg',
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    sand: 'bg-sand-beige',
    gradient: 'bg-gradient-to-b from-white to-sand-beige',
  };

  const paddings = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-24 sm:py-32',
  };

  return (
    <section className={cn(backgrounds[background], paddings[padding], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
