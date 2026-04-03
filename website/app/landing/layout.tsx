import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        #site-header, #site-footer { display: none !important; }
      `}</style>
      {children}
      <WhatsAppButton />
    </>
  );
}
