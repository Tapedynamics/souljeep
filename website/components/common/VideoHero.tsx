'use client';

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle?: string;
  height?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function VideoHero({
  videoSrc,
  posterSrc,
  height = 'h-screen',
  overlay = true,
  children,
}: VideoHeroProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
