'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface VideoSlide {
  src: string;
  poster: string;
  alt?: string;
}

interface VideoCarouselProps {
  videos: VideoSlide[];
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  showPagination?: boolean;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function VideoCarousel({
  videos,
  autoplayDelay = 6000,
  pauseOnHover = true,
  showPagination = true,
  overlay = true,
  children,
}: VideoCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: SwiperType) => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play current video
    const currentVideo = videoRefs.current[swiper.activeIndex];
    if (currentVideo) {
      currentVideo.play().catch(() => {
        // Autoplay prevented, silently continue
      });
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover && swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={showPagination ? {
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !w-3 !h-3',
        } : false}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Video Background */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full object-cover"
                poster={video.poster}
                muted
                loop
                playsInline
                autoPlay={index === 0}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Gradient */}
              {overlay && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      {children && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="pointer-events-auto h-full">
            {children}
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 2rem !important;
        }

        .swiper-pagination-bullet {
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
